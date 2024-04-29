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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
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
