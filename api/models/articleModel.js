import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
  {
    judul: {
      type: String,
      required: true,
    },
    isi: {
      type: String,
      required: true,
    },
    penulis: {
      type: String,
      required: true,
    },
    editor: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);
export default Article;
