import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    orderItems: [
      {
        product: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    shippingAddress: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    resi: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Belum Dibayar", "Diproses", "Dikirim", "Selesai", "Dibatalkan"],
      required: true,
      default: "Belum Dibayar",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
