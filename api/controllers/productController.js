import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import Cart from "../models/cartModel.js";
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
    const oldName = product.name; // Simpan nama produk lama

    if (name) product.name = name;
    if (category) product.category = category;
    if (description) product.description = description;
    if (price) product.price = price;
    if (stock) product.countInStock = stock;

    if (req.file) {
      try {
        // delete image
        await unlink(`./${product.image}`);
      } catch (err) {
        console.error(err);
      }

      product.image = `public/images/${req.file.filename}`;
    }

    const updatedProduct = await product.save();

    const carts = await Cart.find({ "items.product": oldName });

    if (carts.length > 0) {
      carts.forEach(async (cart) => {
        const item = cart.items.find((item) => item.product === oldName);
        item.product = updatedProduct.name;
        item.image = updatedProduct.image;
        item.price = updatedProduct.price;

        await cart.save();
      });
    }

    await carts.save();

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

    const carts = await Cart.find({ "items.product": product.name });

    if (carts.length > 0) {
      carts.forEach(async (cart) => {
        cart.items = cart.items.filter((item) => item.product !== product.name);
        await cart.save();
      });
    }

    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@desc   rating
//@route  POST /api/products/:id/reviews
//@access Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    //cek apakah product sudah di review oleh user
    const alreadyReviewed = product.review.find((r) => r.name === req.user.name);

    if (alreadyReviewed) {
      product.review.forEach((review) => {
        if (review.name === req.user.name) {
          review.rating = Number(rating);
        }
      });
      await product.save();
      return res.status(201).json({ message: "Review updated" });
    } else {
      const review = {
        name: req.user.name,
        rating: Number(rating),
      };

      product.review.push(review);

      await product.save();
      res.status(201).json({ message: "Review added" });
    }
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById, addProduct, updateProduct, deleteProduct, createProductReview };
