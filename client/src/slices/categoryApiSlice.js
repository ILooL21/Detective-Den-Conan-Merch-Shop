import { apiSlice } from "./apiSlice";
const CATEGORY_URL = "/api/categories";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: `${CATEGORY_URL}`,
        method: "GET",
      }),
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: `${CATEGORY_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateCategory: builder.mutation({
      query: (data) => ({
        url: `${CATEGORY_URL}/${data.id}`,
        method: "PUT",
        body: {
          name: data.name,
        },
      }),
    }),
    deleteCategory: builder.mutation({
      query: (data) => ({
        url: `${CATEGORY_URL}/${data.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllCategoriesQuery, useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation } = categoryApiSlice;
