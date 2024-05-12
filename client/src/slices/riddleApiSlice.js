import { apiSlice } from "./apiSlice";
const RIDDLE_URL = "/api/riddles";

export const riddleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRiddles: builder.query({
      query: () => ({
        url: `${RIDDLE_URL}`,
        method: "GET",
      }),
    }),
    getSingleRiddle: builder.query({
      query: (id) => ({
        url: `${RIDDLE_URL}/${id}`,
        method: "GET",
      }),
    }),
    createRiddle: builder.mutation({
      query: (data) => ({
        url: `${RIDDLE_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateRiddle: builder.mutation({
      query: (data) => ({
        url: `${RIDDLE_URL}/${data.get("id")}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteRiddle: builder.mutation({
      query: (data) => ({
        url: `${RIDDLE_URL}/${data.id}`,
        method: "DELETE",
      }),
    }),
    addTersangka: builder.mutation({
      query: (data) => ({
        url: `${RIDDLE_URL}/tersangka/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteTersangka: builder.mutation({
      query: (data) => ({
        url: `${RIDDLE_URL}/tersangka/${data.id}`,
        method: "DELETE",
        body: data,
      }),
    }),
    answerRiddle: builder.mutation({
      query: (data) => ({
        url: `${RIDDLE_URL}/${data.id}/answer`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllRiddlesQuery, useGetSingleRiddleQuery, useCreateRiddleMutation, useUpdateRiddleMutation, useDeleteRiddleMutation, useAddTersangkaMutation, useDeleteTersangkaMutation, useAnswerRiddleMutation } = riddleApiSlice;
