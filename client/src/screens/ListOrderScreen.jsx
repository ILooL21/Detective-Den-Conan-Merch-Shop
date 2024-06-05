import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useGetOrdersQuery, useCancelOrderMutation, usePaidOrderMutation, useUpdateOrderMutation } from "../slices/orderApiSlice.js";
import { FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { Breadcrumb } from "antd";
import "../styles/ListOrderScreen.css";

const ListOrderScreen = () => {
  const [resi, setResi] = useState("");
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const { data: orders, isLoading, refetch } = useGetOrdersQuery();

  const [cancelOrder] = useCancelOrderMutation();
  const [paidOrder] = usePaidOrderMutation();
  const [updateOrder] = useUpdateOrderMutation();

  const handleCancelOrder = async (id) => {
    try {
      await cancelOrder(id);
      refetch();
      setList(orders);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePaidOrder = async (id) => {
    try {
      await paidOrder(id);
      refetch();
      setList(orders);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateOrder = async (id) => {
    try {
      await updateOrder({ id, resi, status: "Dikirim" });
      refetch();
      setList(orders);
    } catch (error) {
      console.error(error);
    }
  };

  const searchHandler = () => {
    if (search !== "") {
      const regex = new RegExp(search, "i");
      const results = orders?.filter((order) => {
        return regex.test(order._id);
      });
      if (results.length === 0) {
        toast.error("Produk tidak ditemukan");
        refetch();
        setList(orders);
      } else {
        setList(results);
      }
    } else {
      refetch();
      setList(orders);
    }
  };

  useEffect(() => {
    setList(orders);
  }, [orders]);

  const searchSubmit = (e) => {
    e.preventDefault();
    searchHandler();
  };

  return (
    <div className="container-list-order">
      <div>
        <form onSubmit={searchSubmit}>
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
            <div className="d-flex align-items-center">
              <input
                className="input-search-order"
                type="text"
                placeholder="Search by order id"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: "200px" }}
              />
              <Button
                type="submit"
                className="button-list-order">
                <FaSearch />
              </Button>
            </div>
          </div>
        </form>
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {list?.map((order) => (
            <Card key={order._id} style={{marginBottom: "24px", border: "solid 1px #db4444"}}>
              <Card.Body>
                <b>Order ID</b>
                <Card.Text>{order._id}</Card.Text>
                <b>Customer</b>
                <Card.Text>{order.user.name}</Card.Text>
                <b>List Order</b>
                  <table className="table-list-order">
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
                        <tr>
                          <td colSpan={2}><b>Total</b></td>
                          <td colSpan={2}>{order.totalPrice}</td>
                        </tr>
                    </tbody>
                  </table>
                  <b>Nomor Resi</b>
                <Card.Text>
                  {order.status === "Diproses" ? (
                    <input
                      type="text"
                      value={order.resi === "" ? resi : order.resi}
                      placeholder="Masukkan resi"
                      onChange={(e) => setResi(e.target.value)}
                      className="input-resi"
                    />
                  ) : order.resi ? (
                    order.resi
                  ) : (
                    "Belum ada resi"
                  )}
                </Card.Text>
                <b>Alamat</b>
                <Card.Text>{order.shippingAddress}</Card.Text>
                <b>Status</b>
                <Card.Text>{order.status}</Card.Text>
                <b>Tanggal Pesanan</b>
                <Card.Text>
                  {
                    new Date(order.createdAt).toLocaleString("id-ID")
                  }
                </Card.Text>
              </Card.Body>
              {(order.status === "Belum Dibayar" || order.status === "Diproses" || (order.status !== "Dibatalkan" && order.status !== "Selesai" && order.status !== "Dikirim")) && (
                <Card.Footer style={{display: "flex", gap: "8px"}}>
                  {order.status === "Belum Dibayar" && <button className="button-order-green" onClick={() => handlePaidOrder(order._id)}>Paid</button>}
                  {order.status === "Diproses" && <button className="button-order-green" onClick={() => handleUpdateOrder(order._id)}>Update</button>}
                  {order.status !== "Dibatalkan" && order.status !== "Selesai" && order.status !== "Dikirim" && <button className="button-order" onClick={() => handleCancelOrder(order._id)}>Cancel</button>}
                </Card.Footer>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListOrderScreen;
