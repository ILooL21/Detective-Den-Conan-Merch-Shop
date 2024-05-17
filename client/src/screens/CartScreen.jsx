import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetCartsByIDQuery, useDeleteProductInCartMutation, useAddProductToCartMutation, useDecreaseProductInCartMutation } from "../slices/cartApiSlice";

const CartScreen = () => {
  const [alamat, setAlamat] = useState("");

  const userInfo = useSelector((state) => state.auth.userInfo);

  const { data: carts, isLoading, refetch } = useGetCartsByIDQuery();
  const [deleteProductInCart] = useDeleteProductInCartMutation();
  const [addProductToCart] = useAddProductToCartMutation();
  const [decreaseProductInCart] = useDecreaseProductInCartMutation();

  const handleDeleteProductInCart = async (product) => {
    try {
      await deleteProductInCart({ product: product });
      refetch(); // Refetch data after deletion
    } catch (error) {
      console.error(error);
    }
  };

  const handleIncreaseQuantity = async (cart) => {
    try {
      const data = {
        product: cart.product,
        quantity: cart.quantity + 1,
      };
      await addProductToCart(data);
      refetch(); // Refetch data after increasing quantity
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecreaseQuantity = async (cart) => {
    try {
      const data = {
        product: cart.product,
        quantity: cart.quantity - 1,
      };
      await decreaseProductInCart(data);
      refetch(); // Refetch data after decreasing quantity
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isLoading && carts) {
      refetch();
    }
  }, [carts, isLoading, refetch]);

  return (
    <div
      style={{
        padding: "25vh 100px",
      }}>
      <h1>Cart</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {carts?.items?.length ? (
                carts.items.map((cart) => (
                  <tr key={cart._id}>
                    <td>
                      <img
                        src={`http://localhost:8080/${cart.image}`}
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                        alt={cart.product}
                      />
                    </td>
                    <td>{cart.product}</td>
                    <td>{cart.price}</td>
                    <td>
                      <button
                        onClick={() => handleDecreaseQuantity(cart)}
                        disabled={cart.quantity === 1}>
                        -
                      </button>
                      {cart.quantity}
                      <button onClick={() => handleIncreaseQuantity(cart)}>+</button>
                    </td>
                    <td>{cart.price * cart.quantity}</td>
                    <td>
                      <button onClick={() => handleDeleteProductInCart(cart.product)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Cart is empty</td>
                </tr>
              )}
            </tbody>
          </table>
          <select
            onChange={(e) => {
              setAlamat(e.target.value);
            }}>
            <option value=" ">Pilih Alamat</option>
            {userInfo.listalamat.map((alamat, index) => (
              <option
                key={index}
                value={alamat}>
                {alamat}
              </option>
            ))}
          </select>
          <div>
            <p>Total Price: {carts?.totalPrice ?? 0}</p>
            <p>Total Items: {carts?.totalItems ?? 0}</p>
            <p>{alamat}</p>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
