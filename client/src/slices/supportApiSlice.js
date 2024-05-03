import { apiSlice } from "./apiSlice";
const SUPPORT_URL = "/api/supports";

export const supportApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSupports: builder.query({
      query: () => ({
        url: `${SUPPORT_URL}`,
        method: "GET",
      }),
    }),
    createSupport: builder.mutation({
      query: (data) => ({
        url: `${SUPPORT_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    deleteSupport: builder.mutation({
      query: (data) => ({
        url: `${SUPPORT_URL}/${data.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllSupportsQuery, useCreateSupportMutation, useDeleteSupportMutation } = supportApiSlice;
