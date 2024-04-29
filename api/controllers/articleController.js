import asyncHandler from "express-async-handler";
import Article from "../models/articleModel.js";
import { unlink } from "node:fs";

// @desc    Fetch all articles
// @route   GET /api/articles
// @access  Public
const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find({});
  res.status(200).json(articles);
});

// @desc    Fetch single article
// @route   GET /api/articles/:id
// @access  Public

const getArticleById = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404);
    throw new Error("Article not found");
  }
});

// @desc    Create a article
// @route   POST /api/articles
// @access  Private/Admin
const createArticle = asyncHandler(async (req, res) => {
  const { judul, isi } = req.body;

  const article = new Article({
    judul,
    isi,
    images: `public/images/${req.file.filename}`,
  });

  const createdArticle = await article.save();
  res.status(201).json(createdArticle);
});

// @desc    Update an article
// @route   PUT /api/articles/:id
// @access  Private/Admin
const updateArticle = asyncHandler(async (req, res) => {
  const { judul, isi } = req.body;

  const article = await Article.findById(req.params.id);

  if (article) {
    if (judul) article.judul = judul;
    if (isi) article.isi = isi;

    if (req.file) {
      //delete image
      unlink(article.images, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      article.images = `public/images/${req.file.filename}`;
    }

    const updatedArticle = await article.save();
    res.json(updatedArticle);
  } else {
    res.status(404);
    throw new Error("Article not found");
  }
});

// @desc    Delete an article
// @route   DELETE /api/articles/:id
// @access  Private/Admin
const deleteArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    //delete image
    unlink(article.images, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    await article.deleteOne({ _id: req.params.id });
    res.json({ message: "Article removed" });
  } else {
    res.status(404);
    throw new Error("Article not found");
  }
});

export { getArticles, getArticleById, createArticle, updateArticle, deleteArticle };
