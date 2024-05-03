import { apiSlice } from "./apiSlice";
const ARTICLE_URL = "/api/articles";

export const articleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllArticles: builder.query({
      query: () => ({
        url: `${ARTICLE_URL}`,
        method: "GET",
      }),
    }),
    createArticle: builder.mutation({
      query: (data) => ({
        url: `${ARTICLE_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateArticle: builder.mutation({
      query: (data) => ({
        url: `${ARTICLE_URL}/${data.id}`,
        method: "PUT",
        body: {
          judul: data.judul,
          isi: data.isi,
          penulis: data.penulis,
        },
      }),
    }),
    deleteArticle: builder.mutation({
      query: (data) => ({
        url: `${ARTICLE_URL}/${data.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllArticlesQuery, useCreateArticleMutation, useUpdateArticleMutation, useDeleteArticleMutation } = articleApiSlice;
