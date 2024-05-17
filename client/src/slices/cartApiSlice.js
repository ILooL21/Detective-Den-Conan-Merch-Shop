import { apiSlice } from "./apiSlice";
const CART_URL = "/api/carts";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCartsByID: builder.query({
      query: () => `${CART_URL}/`,
    }),
    addProductToCart: builder.mutation({
      query: (data) => ({
        url: `${CART_URL}/addproduct`,
        method: "PUT",
        body: data,
      }),
    }),
    decreaseProductInCart: builder.mutation({
      query: (data) => ({
        url: `${CART_URL}/decreaseproduct`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProductInCart: builder.mutation({
      query: (data) => ({
        url: `${CART_URL}/deleteproduct`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const { useGetCartsByIDQuery, useAddProductToCartMutation, useDecreaseProductInCartMutation, useDeleteProductInCartMutation } = cartApiSlice;
