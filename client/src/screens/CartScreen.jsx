import { useSelector } from "react-redux";
import { Breadcrumb } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useGetCartsByIDQuery, useDeleteProductInCartMutation, useAddProductToCartMutation, useDecreaseProductInCartMutation } from "../slices/cartApiSlice";
import { toast } from "react-toastify";
import "../styles/CartScreen.css";

const CartScreen = () => {
  const { selectedAddress } = useSelector((state) => state.auth);

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

  const handleCheckout = async () => {
    const items = carts.cart.items
      .filter((item) => {
        const stock = carts.stock.find((stock) => stock.product === item.product);
        return stock && stock.stock >= item.quantity;
      })
      .map((item) => {
        return {
          product: item.product,
          quantity: item.quantity,
          price: item.price,
        };
      });

    const totalPrice = carts.cart.items.reduce((acc, item) => {
      const stock = carts.stock.find((stock) => stock.product === item.product);
      if (stock.stock < item.quantity) {
        return acc;
      }
      return acc + item.price * item.quantity;
    }, 0);

    if (items.length === 0) {
      toast.error("Tambahkan item terlebih dahulu");
      return;
    }

    if (selectedAddress === "") {
      toast.error("Pilih alamat terlebih dahulu");
      return;
    }

    const data = {
      orderItems: items,
      shippingAddress: selectedAddress,
      totalPrice: totalPrice,
    };

    console.log(data);
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
                <th>Keterangan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {carts?.cart.items?.length ? (
                carts.cart.items.map((cart) => (
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
                          className={cart.quantity === 1 ? "quantity-minus disabled" : "quantity-minus"}
                          onClick={() => handleDecreaseQuantity(cart)}
                          disabled={cart.quantity === 1}
                        />
                        <input
                          type="number"
                          step="1"
                          min="1"
                          name="quantity"
                          value={cart.quantity}
                          title="Qty"
                          className="input-text-quantity-cart"
                          size="4"
                          pattern=""
                        />
                        <input
                          type="button"
                          value="+"
                          className={carts.stock.find((stock) => stock.product === cart.product).stock <= cart.quantity ? "quantity-plus disabled" : "quantity-plus"}
                          onClick={() => handleIncreaseQuantity(cart)}
                          disabled={carts.stock.find((stock) => stock.product === cart.product).stock <= cart.quantity}
                        />
                      </div>
                    </td>
                    <td>
                      {carts.stock.find((stock) => stock.product === cart.product).stock < cart.quantity
                        ? "Rp 0,00"
                        : (cart.price * cart.quantity).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                    </td>
                    <td>
                      {carts.stock.map((stock, index) => {
                        if (stock.product === cart.product) {
                          return stock.stock < cart.quantity ? <p key={index}>Stock Habis Tidak Bisa Dibeli</p> : <p key={index}>Stock: {stock.stock}</p>;
                        }
                      })}
                    </td>
                    <td>
                      <div className="container-action-product">
                        <div className="container-delete-product">
                          <button onClick={() => handleDeleteProductInCart(cart.product)}>
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
            }}>
            <div className="selected-address-cart">
              <div className="selected-address-cart-header">
                <h4>Alamat Pengiriman</h4>
                <a href="/addressbook">Ganti Alamat</a>
              </div>
              <div className="selected-address-cart-main">{selectedAddress ? <p>{selectedAddress}</p> : <p>No address selected</p>}</div>
            </div>
            <div className="container-payment-cart">
              <h4>Ringkasan Pesanan</h4>
              <div className="detail-payment-cart">
                <div>
                  <p>Total Items:</p>
                  <p>Total Price:</p>
                </div>
                <div>
                  <p>
                    x
                    {carts.cart?.items.reduce((acc, item) => {
                      const stock = carts.stock.find((stock) => stock.product === item.product);
                      if (stock.stock < item.quantity) {
                        return acc;
                      }
                      return acc + item.quantity;
                    }, 0) ?? 0}
                  </p>
                  <p>
                    {carts.cart?.items
                      .reduce((acc, item) => {
                        const stock = carts.stock.find((stock) => stock.product === item.product);
                        if (stock.stock < item.quantity) {
                          return acc;
                        }
                        return acc + item.price * item.quantity;
                      }, 0)
                      ?.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }) ?? "Rp 0,00"}
                  </p>
                </div>
              </div>
              <div className="container-button-checkout">
                <button onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
