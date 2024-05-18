import { apiSlice } from "./apiSlice";
const ORDER_URL = "/api/orders";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => `${ORDER_URL}/`,
    }),
    getMyOrders: builder.query({
      query: () => `${ORDER_URL}/myorders`,
    }),
    addOrderItems: builder.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/`,
        method: "POST",
        body: data,
      }),
    }),
    updateOrder: builder.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useGetOrdersQuery, useAddOrderItemsMutation, useGetMyOrdersQuery, useUpdateOrderMutation } = orderApiSlice;
