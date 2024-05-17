import {
  useGetAllProductsQuery,
  useDeleteProductMutation,
} from "../slices/productApiSlice";
import AddProductModal from "../components/admin/product/AddProductModal";
import EditProductModal from "../components/admin/product/EditProductModal";
import { FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Breadcrumb } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import "../styles/ListProductScreen.css";

const ListProductScreen = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const { data: products, isLoading } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  useEffect(() => {
    setList(products);
  }, [products]);

  const searchHandler = () => {
    if (search !== "") {
      const regex = new RegExp(search, "i");
      const results = products?.filter((product) => {
        return regex.test(product.name);
      });
      if (results.length === 0) {
        toast.error("Produk tidak ditemukan");
        setList(products);
      } else {
        setList(results);
      }
    } else {
      setList(products);
    }
  };

  const deleteHandler = async (productId) => {
    await deleteProduct({ id: productId });
    window.location.reload();
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchHandler();
  };

  return (
    <div className="container-list-product">
      <div className="container-list-product-header">
        <Breadcrumb
          className="breadcrumb-list-product"
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="/dashboard">Dashboard</a>,
            },
            {
              title: "List Product",
            },
          ]}
        />
      </div>
      <form onSubmit={searchSubmit}>
        <div className="container-search-product">
          <div className="button-add-product">
            <AddProductModal />
          </div>
          <div className="d-flex">
            <input
              className="input-search-product"
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "200px" }}
            />
            <Button
              type="submit" // Menjadikan button sebagai tombol submit
              className="button-list-product"
            >
              <FaSearch />
            </Button>
          </div>
        </div>
      </form>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        <table className="table-list-product">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Gambar</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>
                  <img
                    src={`http://localhost:8080/${product.image}`}
                    style={{
                      width: "160px",
                      height: "auto",
                    }}
                  />
                </td>
                <td>{product.category}</td>
                <td>Rp. {product.price}</td>
                <td>{product.countInStock}</td>
                <td>{product.rating}</td>
                <td>
                  <div className="container-action-product">
                    <div className="container-edit-product">
                      <EditProductModal
                        productId={product._id}
                        name={product.name}
                        price={product.price}
                        stock={product.countInStock}
                        description={product.description}
                        image={product.image}
                        category={product.category}
                      />
                    </div>
                    <div className="container-delete-product">
                      <button onClick={() => deleteHandler(product._id)}>
                        <DeleteOutlined />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListProductScreen;
