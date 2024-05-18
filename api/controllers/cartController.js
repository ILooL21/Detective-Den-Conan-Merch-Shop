import expressAsyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

// @desc    Fetch single cart dari id pemilik
// @route   GET /api/carts/
// @access  Private

const getCartById = expressAsyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    let stock = [];
    for (let i = 0; i < cart.items.length; i++) {
      const product = await Product.findOne({ name: cart.items[i].product });

      stock.push({ product: cart.items[i].product, stock: product.countInStock });
    }
    res.status(200).json({ cart, stock });
  } else {
    res.status(404);
    throw new Error("Cart not found");
  }
});

// @desc    tambah jumlah product di cart
// @route   PUT /api/carts/addproduct
// @access  Private
const addProductToCart = expressAsyncHandler(async (req, res) => {
  const { product, quantity, price, image } = req.body;

  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    const item = cart.items.find((i) => i.product == product);

    if (item) {
      if (quantity) {
        item.quantity = parseInt(quantity);
      } else {
        item.quantity += 1;
      }
    } else {
      cart.items.push({ product, quantity, price, image });
    }

    await cart.save();
    res.status(200).json(cart);
  } else {
    res.status(404);
    throw new Error("Cart not found");
  }
});

// @desc    kurangi jumlah product di cart
// @route   PUT /api/carts/decreaseproduct
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
      res.status(200).json(cart);
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
// @route   DELETE /api/carts/deleteproduct
// @access  Private
const deleteProductInCart = expressAsyncHandler(async (req, res) => {
  const { product } = req.body;

  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    const item = cart.items.find((i) => i.product == product);

    if (item) {
      cart.items.pull(item);
      await cart.save();
      res.status(200).json(cart);
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
