import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}/allUser`,
        method: "GET",
      }),
    }),
    changeRole: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/role`,
        method: "PUT",
        body: data,
      }),
    }),
    refreshToken: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/refreshToken`,
        method: "POST",
        body: data,
      }),
    }),
    addAlamat: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/alamat`,
        method: "POST",
        body: data,
      }),
    }),
    updateAlamat: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/alamat`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteAlamat: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/alamat`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation, useGetAllUsersQuery, useChangeRoleMutation, useRefreshTokenMutation, useAddAlamatMutation, useUpdateAlamatMutation, useDeleteAlamatMutation } =
  userApiSlice;
