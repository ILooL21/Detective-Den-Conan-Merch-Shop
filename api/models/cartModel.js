import mongoose from "mongoose";

const cartItemSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity can not be less then 1."],
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [cartItemSchema],
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    totalItems: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

cartSchema.pre("save", function (next) {
  this.totalPrice = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  this.totalItems = this.items.reduce((acc, item) => acc + item.quantity, 0);
  next();
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
