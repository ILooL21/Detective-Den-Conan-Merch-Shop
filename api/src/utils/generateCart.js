import Cart from "../models/cartModel.js";

const generateCart = async (userId) => {
  const cart = new Cart({
    user: userId,
    items: [],
  });

  await cart.save();
};

export default generateCart;
