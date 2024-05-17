import { apiSlice } from "./apiSlice";
const PRODUCT_URL = "/api/products";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URL}`,
        method: "GET",
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "GET",
      }),
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data.get("id")}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data.id}`,
        method: "DELETE",
      }),
    }),
    reviewsProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data.id}/reviews`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation, useReviewsProductMutation } = productApiSlice;
