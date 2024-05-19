import { useGetMyOrdersQuery, useCancelOrderMutation, useSelesaiOrderMutation } from "../slices/orderApiSlice";
import { Card } from "react-bootstrap";

const ListMyOrderScreen = () => {
  const { data: orders, isLoading, refetch } = useGetMyOrdersQuery();

  const [cancelOrder] = useCancelOrderMutation();
  const [selesaiOrder] = useSelesaiOrderMutation();

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

  return (
    <div>
      <h1>My Orders</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {orders.map((order) => (
            <Card key={order._id}>
              <Card.Body>
                <Card.Text>{order._id}</Card.Text>
                <Card.Text>List Items</Card.Text>
                <div
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    marginBottom: "10px",
                  }}>
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.orderItems.map((item) => (
                        <tr key={item._id}>
                          <td>{item.product}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price * item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Card.Text>Total Price: {order.totalPrice}</Card.Text>
                <Card.Text>Resi: {order.resi ? order.resi : "Belum ada resi"}</Card.Text>
                <Card.Text>Shipping Address: {order.shippingAddress}</Card.Text>
                <Card.Text>Status: {order.status}</Card.Text>
                <Card.Text>Order Date: {new Date(order.createdAt).toLocaleString("id-ID")}</Card.Text>
                {order.status === "Belum Dibayar" && <Card.Text>Hubungi 1234567890 untuk melakukan pembayaran, admin akan mengonfirmasi pembayaran agar barang segera di proses </Card.Text>}
              </Card.Body>
              {(order.status === "Dikirim" || (order.status !== "Dibatalkan" && order.status !== "Selesai")) && (
                <Card.Footer>
                  {order.status === "Dikirim" && <button onClick={() => handleSelesaiOrder(order._id)}>Selesai</button>}
                  {order.status !== "Dibatalkan" && order.status !== "Selesai" && <button onClick={() => handleCancelOrder(order._id)}>Batalkan</button>}
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
