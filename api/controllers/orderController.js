import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

// @desc    Fetch all orders
// @route   GET /api/orders
// @access  Private/Admin

const getOrders = expressAsyncHandler(async (req, res) => {
  const orders = await Order.find({});

  res.json(orders);
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
    //check stock
    for (let i = 0; i < orderItems.length; i++) {
      const item = orderItems[i];
      const product = await Product.findById(item.product);
      if (product.stock < item.quantity) {
        res.status(400);
        throw new Error("Stock tidak mencukupi");
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
  const orders = await Order.find({ user: req.user._id });

  if (orders) {
    return res.json(orders);
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
    }
    if (status) {
      order.status = "Dikirim";
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
    order.status = "Diproses";

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
    order.status = "Selesai";

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
    order.status = "Dibatalkan";

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

export { getOrders, addOrderItems, getMyOrders, updateOrder, cancelOrder, paidOrder, selesaiOrder };
