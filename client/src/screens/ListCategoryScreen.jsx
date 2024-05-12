import {
  useGetAllCategoriesQuery,
  useDeleteCategoryMutation,
} from "../slices/categoryApiSlice";
import { useGetAllProductsQuery } from "../slices/productApiSlice";
import AddCategoryModal from "../components/admin/category/AddCategoryModal";
import EditCategoryModal from "../components/admin/category/EditCategoryModal";
import { FaSearch } from "react-icons/fa";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { Breadcrumb } from "antd";
import "../styles/ListCategoryScreen.css";

const ListCategoryScreen = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const { data: categories, isLoading } = useGetAllCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const { data: products } = useGetAllProductsQuery();

  const countProducts = (categoryId) => {
    return products?.filter((product) => product.category === categoryId)
      .length;
  };

  const handleDelete = async (categoryId) => {
    if (countProducts(categoryId) > 0) {
      toast.error("Kategori tidak bisa dihapus karena masih memiliki produk");
      return;
    }
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
    <div className="container-list-category ">
      <div className="container-list-category-header">
        <Breadcrumb
          className="breadcrumb-list-category"
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="/dashboard">Dashboard</a>,
            },
            {
              title: "List Category",
            },
          ]}
        />
      </div>
      <form onSubmit={searchSubmit}>
        <div className="container-search-category">
          <div className="button-add-category">
            <AddCategoryModal />
          </div>
          <div className="d-flex">
            <input
              className="input-search-category"
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "200px" }}
            />
            <Button
              type="submit" // Menjadikan button sebagai tombol submit
              className="button-list-category"
            >
              <FaSearch />
            </Button>
          </div>
        </div>
      </form>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <table className="table-list-category">
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
                  <div className="container-action-category">
                    <div className="container-edit-category">
                      <EditCategoryModal
                        categoryId={category._id}
                        Name={category.name}
                      />
                    </div>
                    <div className="container-delete-category">
                      <button onClick={() => handleDelete(category._id)}>
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

export default ListCategoryScreen;
