import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";

// @desc    Fetch all categories
// @route   GET /api/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});

  res.json(categories);
});

// @desc    add category
// @route   POST /api/categories
// @access  Private/Admin
const addCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const category = new Category({
    name,
  });

  const createdCategory = await category.save();
  res.status(201).json(createdCategory);
});

// @desc    Update a category
// @route   PUT /api/categories/:id
// @access  Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const category = await Category.findById(req.params.id);

  if (category) {
    const products = await Product.find({ category: category.name });
    if (products) {
      products.map(async (product) => {
        product.category = name;
        await product.save();
      });
    }

    category.name = name;

    const updatedCategory = await category.save();

    res.json(updatedCategory);
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    await category.deleteOne({ _id: req.params.id });
    res.json({ message: "Category removed" });
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

export { getCategories, addCategory, updateCategory, deleteCategory };
