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
      const product = await Product.findById(orderItems[i].product).select("countInStock");

      if (product.countInStock < orderItems[i].quantity) {
        res.status(400);
        throw new Error(`Product ${orderItems[i].name} is out of stock`);
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
      order.status = status;
    }

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

export { getOrders, addOrderItems, getMyOrders, updateOrder };
