import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAccountApi = createApi({
  reducerPath: "userAccountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userAccountApi;
