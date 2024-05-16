import expressAsyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";

// @desc    Fetch single cart dari id pemilik
// @route   GET /api/carts/:id
// @access  Private

const getCartById = expressAsyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.params.id });

  if (cart) {
    res.status(200).json(cart);
  } else {
    res.status(404);
    throw new Error("Cart not found");
  }
});

// @desc    tambah jumlah product di cart
// @route   PUT /api/carts/:id
// @access  Private
const addProductToCart = expressAsyncHandler(async (req, res) => {
  const { product, quantity, price } = req.body;

  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    const item = cart.items.find((i) => i.product == product);

    if (item) {
      item.quantity += 1;
    } else {
      cart.items.push({ product, quantity, price });
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart" });
  } else {
    res.status(404);
    throw new Error("Cart not found");
  }
});

// @desc    kurangi jumlah product di cart
// @route   PUT /api/carts/:id
// @access  Private

const decreaseProductInCart = expressAsyncHandler(async (req, res) => {
  const { product } = req.body;

  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    const item = cart.items.find((i) => i.product == product);

    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cart.items.pull(item);
      }
      await cart.save();
      res.status(200).json({ message: "Product decreased in cart" });
    } else {
      res.status(404);
      throw new Error("Product not found in cart");
    }
  } else {
    res.status(404);
    throw new Error("Cart not found");
  }
});

// @desc    hapus product di cart
// @route   DELETE /api/carts/:id
// @access  Private
const deleteProductInCart = expressAsyncHandler(async (req, res) => {
  const { product } = req.body;

  const cart = await Cart.findOne({ _id: req.params.id });

  if (cart) {
    const item = cart.items.find((i) => i.product == product);

    if (item) {
      cart.items.pull(item);
      await cart.save();
      res.status(200).json({ message: "Product removed from cart" });
    } else {
      res.status(404);
      throw new Error("Product not found in cart");
    }
  } else {
    res.status(404);
    throw new Error("Cart not found");
  }
});

export { getCartById, addProductToCart, decreaseProductInCart, deleteProductInCart };
