import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useGetOrdersQuery, useCancelOrderMutation, usePaidOrderMutation, useUpdateOrderMutation } from "../slices/orderApiSlice.js";
import { FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

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
    <div>
      <h1>Order List</h1>
      <form onSubmit={searchSubmit}>
        <div className="container-search-product">
          <div className="d-flex">
            <input
              className="input-search-product"
              type="text"
              placeholder="Search by id order"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "200px" }}
            />
            <Button
              type="submit"
              className="button-list-product">
              <FaSearch />
            </Button>
          </div>
        </div>
      </form>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {list?.map((order) => (
            <Card key={order._id}>
              <Card.Body>
                <Card.Text>{order.user.name}</Card.Text>
                <Card.Text>List Items</Card.Text>
                <div
                  style={{
                    border: "1px solid black",
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
                <Card.Text>{order.totalPrice}</Card.Text>
                <Card.Text>
                  {order.status === "Diproses" ? (
                    <input
                      type="text"
                      value={order.resi === "" ? resi : order.resi}
                      placeholder="Masukkan resi"
                      onChange={(e) => setResi(e.target.value)}
                    />
                  ) : order.resi ? (
                    order.resi
                  ) : (
                    "Belum ada resi"
                  )}
                </Card.Text>
                <Card.Text>{order.shippingAddress}</Card.Text>
                <Card.Text>{order.status}</Card.Text>
                <Card.Text>
                  {
                    // ubah format createdAt
                    new Date(order.createdAt).toLocaleString("id-ID")
                  }
                </Card.Text>
              </Card.Body>
              {(order.status === "Belum Dibayar" || order.status === "Diproses" || (order.status !== "Dibatalkan" && order.status !== "Selesai")) && (
                <Card.Footer>
                  {order.status === "Belum Dibayar" && <button onClick={() => handlePaidOrder(order._id)}>Paid</button>}
                  {order.status === "Diproses" && <button onClick={() => handleUpdateOrder(order._id)}>Update</button>}
                  {order.status !== "Dibatalkan" && order.status !== "Selesai" && <button onClick={() => handleCancelOrder(order._id)}>Cancel</button>}
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
