import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi", // the name of the generated slice
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1", // the base URL of the API
    credentials: "include", // send cookies with requests to the server
  }),
  endpoints: () => ({}), // the endpoints of the API
});
