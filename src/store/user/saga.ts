import { takeLatest, put, all, call, take } from "typed-redux-saga/macro";
import { DateTime } from "ts-luxon";
import { User } from "firebase/auth";
import {
  signOutUser,
  getCurrentUser,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  db,
} from "../../firebase/index";
import {
  signInSuccess,
  signInFailed,
  signOutSuccess,
  googleSignInStart,
  signOutFailed,
  signUpFailed,
  signUpStart,
  signOutStart,
  emailSignInStart,
  fetchUsersSuccess,
  observeUsers,
} from "./reducer";
import { eventChannel } from "redux-saga";
import { collection, onSnapshot, query } from "firebase/firestore";
import { AdditionalInformation, UserData } from "../../types";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalData?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalData
    );
    if (userSnapshot) {
      yield* put(
        signInSuccess({ ...userSnapshot.data(), id: userSnapshot.id })
      );
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

interface CreateUserAction {
  type: string;
  payload: {
    email: string;
    password: string;
    displayName?: string;
    firstName?: string;
    lastName?: string;
  };
}

export function* signInWithEmail(action: CreateUserAction) {
  const { email, password } = action.payload;
  try {
    const userCredentials = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredentials) {
      const { user } = userCredentials;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* signUp({ payload }: CreateUserAction) {
  try {
    const { email, password, firstName, lastName } = payload;
    const userCredentials = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredentials) {
      const { user } = userCredentials;
      yield* getSnapshotFromUserAuth(user, { firstName, lastName });
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

interface SnapshotData {
  data: UserData[] | [];
}

function* usersObserver() {
  const channel = yield* call(createEventChannel);

  while (true) {
    const { data } = yield* take(channel);
    const mapData = data.map((doc) => {
      const date = DateTime.fromJSDate(doc.createdAt.toDate());
      return {
        ...doc,
        firstName: doc.firstName ?? doc.displayName,
        role: doc.role ?? "user",
        createdAt: date.toLocaleString(DateTime.DATETIME_MED),
      };
    });
    yield* put(fetchUsersSuccess(mapData));
  }
}

function createEventChannel() {
  const listener = eventChannel<SnapshotData>((emit) => {
    const ref = collection(db, "users");

    const unsubscribe = onSnapshot(query(ref), (snapshot) => {
      const data = snapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as UserData)
      );
      emit({ data: data.length > 0 ? data : [] });
    });

    return () => {
      unsubscribe();
    };
  });

  return listener;
}

export function* onGoogleSignInStart() {
  yield* takeLatest(googleSignInStart.type, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield* takeLatest(emailSignInStart.type, signInWithEmail);
}

export function* onSignUpStart() {
  yield* takeLatest(signUpStart.type, signUp);
}

// export function* onCheckUserSection() {
//   yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SECTION, isUserAuthenticated);
// }

export function* onSignOutStart() {
  yield* takeLatest(signOutStart.type, signOut);
}

export function* onObserverUsers() {
  yield* takeLatest(observeUsers.type, usersObserver);
}

export function* userSagas() {
  yield* all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onObserverUsers),
  ]);
}
