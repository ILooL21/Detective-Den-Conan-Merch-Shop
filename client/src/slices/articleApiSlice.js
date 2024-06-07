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
    getArticleById: builder.query({
      query: (id) => ({
        url: `${ARTICLE_URL}/${id}`,
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
        url: `${ARTICLE_URL}/${data.get("id")}`,
        method: "PUT",
        body: data,
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

export const { useGetAllArticlesQuery, useGetArticleByIdQuery, useCreateArticleMutation, useUpdateArticleMutation, useDeleteArticleMutation } = articleApiSlice;
