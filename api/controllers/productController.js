import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import { unlink } from "node:fs";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (products.length === 0) {
    res.status(404);
    throw new Error("Any product not found");
  }

  res.status(200).json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    add product
// @route   POST /api/products
// @access  Private/Admin
const addProduct = asyncHandler(async (req, res) => {
  const { name, category, description, price } = req.body;

  const product = new Product({
    name,
    image: `public/images/${req.file.filename}`,
    category,
    description,
    price,
  });

  console.log(product);

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    update product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, category, description, price, stock } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    if (name) product.name = name;
    if (category) product.category = category;
    if (description) product.description = description;
    if (price) product.price = price;
    if (stock) product.countInStock = stock;

    if (req.file) {
      // delete image
      unlink(`./${product.image}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      product.image = `public/images/${req.file.filename}`;
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    delete product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    // delete image
    unlink(`./${product.image}`, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    await product.deleteOne({ _id: req.params.id });
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById, addProduct, updateProduct, deleteProduct };
