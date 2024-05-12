import { useGetAllProductsQuery, useDeleteProductMutation } from "../slices/productApiSlice";
import AddProductModal from "../components/admin/product/AddProductModal";
import EditProductModal from "../components/admin/product/EditProductModal";
import { FaSearch } from "react-icons/fa";
import { Table, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

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
    <div
      style={{
        marginTop: "150px",
        marginInline: "50px",
      }}>
      <AddProductModal />
      <form onSubmit={searchSubmit}>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="d-flex align-items-center">
            <input
              className="form-control"
              type="text"
              placeholder="Cari berdasarkan nama"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              type="submit"
              variant="outline-primary"
              className="mx-2">
              <FaSearch />
            </Button>
          </div>
        </div>
      </form>
      <h1>Daftar Product</h1>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          className="table-sm">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Gambar</th>
              <th>Kategori</th>
              <th>Deskripsi</th>
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
                      width: "200px",
                      height: "200px",
                    }}
                  />
                </td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>Rp. {product.price}</td>
                <td>{product.countInStock}</td>
                <td>{product.rating}</td>
                <td>
                  <EditProductModal
                    productId={product._id}
                    name={product.name}
                    price={product.price}
                    stock={product.countInStock}
                    description={product.description}
                    image={product.image}
                    category={product.category}
                  />
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(product._id)}>
                    Hapus
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ListProductScreen;
