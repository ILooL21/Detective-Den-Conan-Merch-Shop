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
    createProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data.id}`,
        method: "PUT",
        body: {
          name: data.name,
          price: data.price,
          description: data.description,
          category: data.category,
        },
      }),
    }),
    deleteProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data.id}`,
        method: "DELETE",
      }),
    }),
  }),
});
