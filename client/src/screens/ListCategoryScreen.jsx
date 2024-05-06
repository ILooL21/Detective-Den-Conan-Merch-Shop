import { useGetAllCategoriesQuery, useDeleteCategoryMutation } from "../slices/categoryApiSlice";
import { useGetAllProductsQuery } from "../slices/productApiSlice";
import AddCategoryModal from "../components/admin/category/AddCategoryModal";
import EditCategoryModal from "../components/admin/category/EditCategoryModal";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";

const ListCategoryScreen = () => {
  const { data: categories, isLoading } = useGetAllCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const { data: products } = useGetAllProductsQuery();

  const countProducts = (categoryId) => {
    return products?.filter((product) => product.category === categoryId).length;
  };

  const handleDelete = async (categoryId) => {
    await deleteCategory({ id: categoryId });
    toast.success("Kategori berhasil dihapus");
  };

  return (
    <div
      style={{
        marginTop: "150px",
      }}>
      <AddCategoryModal />
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
            {categories?.map((category) => (
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
