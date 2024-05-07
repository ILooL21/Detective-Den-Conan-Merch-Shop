import { useGetAllCategoriesQuery, useDeleteCategoryMutation } from "../slices/categoryApiSlice";
import { useGetAllProductsQuery } from "../slices/productApiSlice";
import AddCategoryModal from "../components/admin/category/AddCategoryModal";
import EditCategoryModal from "../components/admin/category/EditCategoryModal";
import { FaSearch } from "react-icons/fa";
import { Table, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const ListCategoryScreen = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const { data: categories, isLoading } = useGetAllCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const { data: products } = useGetAllProductsQuery();

  const countProducts = (categoryId) => {
    return products?.filter((product) => product.category === categoryId).length;
  };

  const handleDelete = async (categoryId) => {
    await deleteCategory({ id: categoryId });
    window.location.reload();
  };

  useEffect(() => {
    setList(categories);
  }, [categories]);

  const searchHandler = () => {
    if (search !== "") {
      const regex = new RegExp(search, "i");
      const results = categories?.filter((category) => {
        return regex.test(category.name);
      });
      if (results.length === 0) {
        toast.error("Kategori tidak ditemukan");
      } else {
        setList(results);
      }
    } else {
      setList(categories);
    }
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
      <AddCategoryModal />
      <form onSubmit={searchSubmit}>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="d-flex align-items-center">
            <input
              className="form-control"
              type="text"
              placeholder="Search by Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "200px" }}
            />
            <Button
              type="submit"
              className="btn btn-primary ms-2">
              <FaSearch />
            </Button>
          </div>
        </div>
      </form>
      <h1>Daftar Kategori</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          className="table-sm">
          <thead>
            <tr>
              <th>Nama Kategori</th>
              <th>Jumlah Produk</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((category) => (
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>{countProducts(category.name)}</td>
                <td>
                  <EditCategoryModal
                    categoryId={category._id}
                    Name={category.name}
                  />
                  <button onClick={() => handleDelete(category._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ListCategoryScreen;
