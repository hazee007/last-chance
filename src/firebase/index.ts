import { initializeApp } from "firebase/app";
import "@firebase/storage";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";
import {
  getDoc,
  setDoc,
  doc,
  getFirestore,
  QueryDocumentSnapshot,
  collection,
  DocumentData,
  CollectionReference,
  getDocs,
  query,
  Timestamp,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { AdditionalInformation, UserData } from "../types";

const firebaseConfig = {
  apiKey: "AIzaSyAuQyUFy8AxXSMhf3cHadxqVmmYXIKFkHQ",
  authDomain: "jides-5cf91.firebaseapp.com",
  projectId: "jides-5cf91",
  storageBucket: "jides-5cf91.appspot.com",
  messagingSenderId: "233519044057",
  appId: "1:233519044057:web:15ae2835f7e45cd3c175c8",
  measurementId: "G-H5FQXJSBCB",
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export const getCollection = async (
  collectionName: string
): Promise<UserData[]> => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);

  return querySnapShot.docs.map(
    (docSnapshot) => docSnapshot.data() as UserData
  );
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalData?: AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        createdAt,
        displayName,
        email,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> =>
  new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
