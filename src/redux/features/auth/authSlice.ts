import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../../types";
import { RootState } from "../store";

// initial state type
type TAuthState = {
  user: TUser | null;
  token: string | null;
};

// initial state
const initialState: TAuthState = {
  user: null,
  token: null,
};

// create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login action
    setUser: (state, action) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
    },

    // logout action
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

// export current user and token
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
