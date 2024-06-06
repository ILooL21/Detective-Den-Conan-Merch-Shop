import {
  useGetMyOrdersQuery,
  useCancelOrderMutation,
  useSelesaiOrderMutation,
} from "../slices/orderApiSlice";
import { useReviewsProductMutation } from "../slices/productApiSlice";
import { Card } from "react-bootstrap";
import { Rate, Breadcrumb } from "antd";
import { useEffect } from "react";
import "../styles/ListOrderScreen.css";

const ListMyOrderScreen = () => {
  const { data: orders, isLoading, refetch } = useGetMyOrdersQuery();

  const [cancelOrder] = useCancelOrderMutation();
  const [selesaiOrder] = useSelesaiOrderMutation();
  const [ratingOrder] = useReviewsProductMutation();

  const handleCancelOrder = async (id) => {
    try {
      await cancelOrder(id);
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelesaiOrder = async (id) => {
    try {
      await selesaiOrder(id);
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRating = async (id, rating) => {
    try {
      await ratingOrder({ id, rating });
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="container-list-order">
      <div>
          <div className="d-flex justify-content-between align-items-center my-3">
            <div className="container-list-order-header">
              <Breadcrumb
                className="breadcrumb-list-order"
                items={[
                  {
                    title: <a href="/">Home</a>,
                  },
                  {
                    title: <a href="/dashboard">Dashboard</a>,
                  },
                  {
                    title: "List Order",
                  },
                ]}
              />
            </div>
          </div>
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {orders.map((order) => (
            <Card key={order._id} style={{marginBottom: "24px", border: "solid 1px #db4444"}}>
            <Card.Body>
              <b>Order ID</b>
              <Card.Text>{order._id}</Card.Text>
              <b>List Order</b>
                  <table className="table-list-order">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        {order.status === "Selesai" && <th>Rating</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {order.orderItems.map((item) => (
                        <tr key={item._id}>
                          <td>{item.product}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price * item.quantity}</td>
                          {order.status === "Selesai" ? (
                            item.rating ? (
                              <td>
                                <Rate
                                  className="rating-icon-product"
                                  value={item.rating}
                                  onChange={(value) =>
                                    handleRating(item.id, value)
                                  }
                                />
                              </td>
                            ) : (
                              <td>
                                <Rate
                                  className="rating-icon-product"
                                  value={0}
                                  onChange={(value) =>
                                    handleRating(item.id, value)
                                  }
                                />
                              </td>
                            )
                          ) : null}
                        </tr>
                      ))}
                      <tr>
                          <td colSpan={3}><b>Total</b></td>
                          <td colSpan={2}>{order.totalPrice}</td>
                        </tr>
                    </tbody>
                  </table>
                  <b>Nomor Resi</b>
                <Card.Text>
                  {order.resi ? order.resi : "Belum ada resi"}
                </Card.Text>
                  <b>Alamat</b>
                <Card.Text>{order.shippingAddress}</Card.Text>
                  <b>Status</b>
                <Card.Text>{order.status}</Card.Text>
                  <b>Tanggal Pesanan</b>
                <Card.Text>
                  {new Date(order.createdAt).toLocaleString("id-ID")}
                </Card.Text>
                {order.status === "Belum Dibayar" && (
                  <Card.Text>
                    Hubungi
                    <a
                      href={`https://wa.me/6285745820511?text=Halo%20saya%20ingin%20membayar%20pesanan%20dengan%20id%20${order._id}`}
                    >
                      085745820511
                    </a>
                    untuk melakukan pembayaran, admin akan mengonfirmasi
                    pembayaran agar barang segera di proses
                  </Card.Text>
                )}
                {order.status === "Diproses" && (
                  <Card.Text>
                    Barang sedang diproses, nomor resi akan tertera disini saat
                    barang sudah dikirim. jika ingin melakukan pembatalan segera
                    konfirmasi ke
                    <a
                      href={`https://wa.me/6285745820511?text=Halo%20saya%20ingin%20membatalkan%20pesanan%20dengan%20id%20${order._id}`}
                    >
                      085745820511
                    </a>
                    (admin)
                  </Card.Text>
                )}
              </Card.Body>
              {(order.status === "Dikirim" ||
                (order.status !== "Dibatalkan" &&
                  order.status !== "Selesai")) && (
                <Card.Footer>
                  {order.status === "Dikirim" && (
                    <button className="button-order-green" onClick={() => handleSelesaiOrder(order._id)}>
                      Selesai
                    </button>
                  )}
                  {(order.status === "Belum Dibayar" ||
                    order.status === "Diproses") && (
                    <button className="button-order" onClick={() => handleCancelOrder(order._id)}>
                      Batalkan
                    </button>
                  )}
                </Card.Footer>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListMyOrderScreen;
