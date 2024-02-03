import { createSelector } from "reselect";
import { UserState } from "./reducer";
import { RootState } from "../store";

const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);

export const selectLoading = createSelector(
  [selectUserReducer],
  (user) => user.loading
);

export const selectAllUsers = createSelector(
  [selectUserReducer],
  (user) => user.allUsers
);

export const selectUser = (userId: string) =>
  createSelector([selectAllUsers], (users) =>
    users.find((user) => user.id === userId)
  );
