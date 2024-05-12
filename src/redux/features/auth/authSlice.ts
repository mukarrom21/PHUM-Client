import { createSlice } from "@reduxjs/toolkit";

// initial state type
type TAuthState = {
  user: object | null;
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
    login: (state, action) => {
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

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
