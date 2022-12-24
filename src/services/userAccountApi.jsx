import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAccountApi = createApi({
  reducerPath: "userAccountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
      }),
    }),
    getLoginStatus: builder.query({
      query: () => ({
        url: "/auth/status",
        method: "GET",
      }),
    }),
    getUserProfile: builder.query({
      query: (username) => ({
        url: `/users/${username}`,
        method: "GET",
      }),
    }),
    getAllConnectionsByUser: builder.query({
      query: () => ({
        url: "/users/connections",
        method: "GET"
      })
    })
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetLoginStatusQuery,
  useGetUserProfileQuery,
  useGetAllConnectionsByUserQuery
} = userAccountApi;
