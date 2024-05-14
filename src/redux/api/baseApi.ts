import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../features/store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1", // the base URL of the API
  credentials: "include", // send cookies with requests to the server

  // add the token to the headers of the every request to the server with the prepareHeaders function
  prepareHeaders: (headers, { getState }) => {
    // add the token to the headers
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

// custom baseQuery with refresh token to get new access token by refresh token
const customBaseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // console.log("customBaseQueryWithRefreshToken result", result);
  if (result?.error?.status === 401) {
    // get token by refresh token
    const fetchRefreshToken = await fetch(
      "http://localhost:5000/api/v1/auth/refresh-token",
      {
        method: "POST",
        credentials: "include", // send cookies with requests to the server
      }
    );
    const refreshResult = await fetchRefreshToken.json();
    // console.log(refreshResult);

    // if refresh token is valid dispatch setUser
    if (refreshResult.data) {
      // user data
      const userData = (api.getState() as RootState).auth.user;
      // dispatch setUser
      api.dispatch(setUser({ user: userData, token: refreshResult.data }));

      // retry original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // if refresh token is not valid dispatch logout
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi", // the name of the generated slice
  baseQuery: customBaseQueryWithRefreshToken,
  endpoints: () => ({}), // the endpoints of the API
});
