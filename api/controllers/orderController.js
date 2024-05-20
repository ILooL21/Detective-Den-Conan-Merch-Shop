import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";
import Cart from "../models/cartModel.js";

// @desc    Fetch all orders
// @route   GET /api/orders
// @access  Private/Admin

const getOrders = expressAsyncHandler(async (req, res) => {
  const orders = await Order.find({}).sort({ createdAt: -1 }).populate("user", "id name");

  const statusOrder = ["Belum Dibayar", "Diproses", "Dikirim", "Selesai", "Dibatalkan"];

  const sortedOrders = orders.sort((a, b) => {
    const statusA = statusOrder.indexOf(a.status);
    const statusB = statusOrder.indexOf(b.status);

    if (statusA < statusB) return -1;
    if (statusA > statusB) return 1;

    // If statuses are the same, sort by createdAt descending
    if (a.createdAt < b.createdAt) return 1;
    if (a.createdAt > b.createdAt) return -1;

    return 0;
  });

  res.json(sortedOrders);
});

// @desc    Create new order
// @route   POST /api/orders
// @access  Private

const addOrderItems = expressAsyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    for (let i = 0; i < orderItems.length; i++) {
      const item = orderItems[i];
      const product = await Product.findOne({ name: item.product });
      if (product.countInStock < item.quantity) {
        res.status(400);
        throw new Error("Stock tidak mencukupi");
      } else {
        product.countInStock = product.countInStock - item.quantity;
        await product.save();

        const cart = await Cart.findOne({ user: req.user._id });
        if (cart) {
          cart.items = cart.items.filter((x) => x.product.toString() !== item.product);
          await cart.save();
        } else {
          res.status(404);
          throw new Error("Cart not found");
        }
      }
    }

    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc    Get order all user order
// @route   GET /api/orders
// @access  Private

const getMyOrders = expressAsyncHandler(async (req, res) => {
  // Mendapatkan semua pesanan pengguna yang tidak dibatalkan
  const orders = await Order.find({ user: req.user._id, status: { $ne: "Dibatalkan" } }).sort({ createdAt: -1 });

  // Mengecek apakah pengguna telah memberikan rating pada setiap produk dalam pesanan mereka
  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < orders[i].orderItems.length; j++) {
      const item = orders[i].orderItems[j];
      const product = await Product.findOne({ name: item.product });
      if (product) {
        const userRating = product.review.filter((x) => x.name.toString() === req.user.name.toString());
        item.rating = userRating.length > 0 ? userRating[0].rating : 0;
      } else {
        continue;
      }
    }
  }

  if (orders) {
    // Mengurutkan pesanan berdasarkan status dan tanggal pembuatan
    const statusOrder = ["Belum Dibayar", "Diproses", "Dikirim", "Selesai", "Dibatalkan"];
    const sortedOrders = orders.sort((a, b) => {
      const statusA = statusOrder.indexOf(a.status);
      const statusB = statusOrder.indexOf(b.status);

      if (statusA < statusB) return -1;
      if (statusA > statusB) return 1;

      if (a.createdAt < b.createdAt) return 1;
      if (a.createdAt > b.createdAt) return -1;

      return 0;
    });

    res.json(sortedOrders);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    update order
// @route   PUT /api/orders/:id
// @access  Private

const updateOrder = expressAsyncHandler(async (req, res) => {
  const { resi, status } = req.body;
  const order = await Order.findById(req.params.id);

  if (order) {
    if (resi) {
      order.resi = resi;
    } else {
      res.status(400);
      throw new Error("Resi tidak boleh kosong");
    }

    if (status) {
      if (order.status === "Diproses") {
        order.status = status;
      } else {
        res.status(400);
        throw new Error("Status tidak sesuai prosedur");
      }
    } else {
      res.status(400);
      throw new Error("Status tidak boleh kosong");
    }

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    paid order
// @route   PUT /api/orders/:id/paid
// @access  Private

const paidOrder = expressAsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    if (order.status === "Belum Dibayar") {
      order.status = "Diproses";
    } else {
      res.status(400);
      throw new Error("Status tidak sesuai prosedur");
    }

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    selesai order
// @route   Put /api/orders/:id/selesai
// @access  Private

const selesaiOrder = expressAsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    if (order.status === "Dikirim") {
      order.status = "Selesai";
    } else {
      res.status(400);
      throw new Error("Status tidak sesuai prosedur");
    }

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    cancel order
// @route   Put /api/orders/:id/cancel
// @access  Private

const cancelOrder = expressAsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    if (order.status !== "Selesai" && order.status !== "Dibatalkan" && order.status !== "Dikirim") {
      order.status = "Dibatalkan";
    } else {
      res.status(400);
      throw new Error("Status tidak sesuai prosedur");
    }

    for (let i = 0; i < order.orderItems.length; i++) {
      const item = order.orderItems[i];
      const product = await Product.findOne({ name: item.product });
      product.countInStock = product.countInStock + item.quantity;
      await product.save();
    }

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

export { getOrders, addOrderItems, getMyOrders, updateOrder, cancelOrder, paidOrder, selesaiOrder };
