import { configureStore } from "@reduxjs/toolkit";

// authReducer import
import authReducer from "./auth/authSlice";
import baseApi from "../api/baseApi";

export const store = configureStore({
  reducer: {
    // Add the baseApi reducer to the store
    [baseApi.reducerPath]: baseApi.reducer,
    // Add the generated reducer as a specific top-level slice
    auth: authReducer,
  },

  // add the api middleware to the store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
