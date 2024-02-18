import { createSlice } from "@reduxjs/toolkit";

import { UserData } from "../../types";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly loading: boolean;
  readonly allUsers: UserData[];
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  allUsers: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
    },
    signInFailed: (state, action) => {
      state.error = action.payload;
    },
    signUpFailed: (state, action) => {
      state.error = action.payload;
    },
    signOutFailed: (state, action) => {
      state.error = action.payload;
    },
    fetchUsersSuccess: (state, action) => {
      state.allUsers = action.payload;
    },
    observeUsers: (state) => {},
    googleSignInStart: () => {},
    signUpStart: (state, action) => {},
    signOutStart: () => {},
    emailSignInStart: (state, action) => {},
  },
});

export const {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  googleSignInStart,
  emailSignInStart,
  signUpStart,
  signOutStart,
  signOutFailed,
  signUpFailed,
  fetchUsersSuccess,
  observeUsers,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
