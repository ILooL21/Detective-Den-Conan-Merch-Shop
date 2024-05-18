import { useSelector } from "react-redux";
import { Breadcrumb } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import {
  useGetCartsByIDQuery,
  useDeleteProductInCartMutation,
  useAddProductToCartMutation,
  useDecreaseProductInCartMutation,
} from "../slices/cartApiSlice";
import "../styles/CartScreen.css";

const CartScreen = () => {
  // const [alamat, setAlamat] = useState("");
  const { selectedAddress } = useSelector((state) => state.auth);
  // const userInfo = useSelector((state) => state.auth.userInfo);
  //   const { selectedAddress } = useSelector((state) => state.auth);

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
    <div className="container-cart">
      <div className="container-cart-header">
        <Breadcrumb
          className="breadcrumb-cart"
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: "Cart",
            },
          ]}
        />
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <table className="table-cart">
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
                    <td>
                      {cart.price?.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }) ?? "Rp 0,00"}
                    </td>
                    <td>
                      <div className="product-quantity-cart">
                        <input
                          type="button"
                          value="-"
                          className="quantity-minus"
                          onClick={() => handleDecreaseQuantity(cart)}
                          disabled={cart.quantity === 1}
                        />
                        <input
                          type="number"
                          step="1"
                          min="1"
                          name="quantity"
                          value={cart.quantity}
                          // onChange={(e) => setQuantity(Number(e.target.value))}
                          title="Qty"
                          className="input-text-quantity-cart"
                          size="4"
                          pattern=""
                        />
                        <input
                          type="button"
                          value="+"
                          className="quantity-plus"
                          onClick={() => handleIncreaseQuantity(cart)}
                        />
                      </div>
                    </td>
                    <td>{cart.price * cart.quantity}</td>
                    <td>
                      <div className="container-action-product">
                        <div className="container-delete-product">
                          <button
                            onClick={() =>
                              handleDeleteProductInCart(cart.product)
                            }
                          >
                            <DeleteOutlined />
                          </button>
                        </div>
                      </div>
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
          <div
            style={{
              display: "flex",
              gap: "32px",
              width: "100%",
              height: "auto",
            }}
          >
            <div className="selected-address-cart">
              <div className="selected-address-cart-header">
                <h4>Alamatku</h4>
                <a href="/addressbook">Ganti Alamat</a>
              </div>
              <div className="selected-address-cart-main">
                {selectedAddress ? (
                  <p>{selectedAddress}</p>
                ) : (
                  <p>No address selected</p>
                )}
              </div>
            </div>
            <div className="container-payment-cart">
              <h4>Ringkasan Pesanan</h4>
              <div className="detail-payment-cart">
                <div>
                  <p>Total Items:</p>
                  <p>Total Price:</p>
                </div>
                <div>
                  <p>x{carts?.totalItems ?? 0}</p>
                  <p>
                    {carts?.totalPrice?.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }) ?? "Rp 0,00"}
                  </p>
                </div>
              </div>
              <div className="container-button-checkout">
                <button>Proses to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
