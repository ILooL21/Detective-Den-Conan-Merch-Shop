import { FaSearch } from "react-icons/fa";
import { Table, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useGetAllArticlesQuery, useDeleteArticleMutation } from "../slices/articleApiSlice";
import AddArticleModal from "../components/admin/article/AddArticleModal";
import EditArticleModal from "../components/admin/article/EditArticleModal";
const ListArticleScreen = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const { data: articles, isLoading } = useGetAllArticlesQuery();
  const [deleteArticle] = useDeleteArticleMutation();

  useEffect(() => {
    setList(articles);
  }, [articles]);

  const searchHandler = () => {
    if (search !== "") {
      const results = articles?.filter((category) => {
        return category.judul.toLowerCase().startsWith(search.toLowerCase());
      });
      if (results.length === 0) {
        toast.error("Artikel tidak ditemukan");
      } else {
        setList(results);
      }
    } else {
      setList(articles);
    }
  };

  const deleteHandler = async (articleId) => {
    await deleteArticle({ id: articleId });
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
      <AddArticleModal />
      <form onSubmit={searchSubmit}>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="d-flex align-items-center">
            <input
              className="form-control"
              type="text"
              placeholder="Cari berdasarkan judul"
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
      <h1>Daftar Artikel</h1>
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
              <th>Judul</th>
              <th>Thumbnail</th>
              <th>Penulis</th>
              <th>Editor</th>
              <th>Isi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((article) => (
              <tr key={article._id}>
                <td>{article.judul}</td>
                <td>
                  <img
                    src={`http://localhost:8080/${article.images}`}
                    style={{ width: "300px" }}
                  />
                </td>
                <td>{article.penulis}</td>
                <td>{article.editor}</td>
                <td>{article.isi}</td>
                <td>
                  <EditArticleModal
                    articleId={article._id}
                    judul={article.judul}
                    isi={article.isi}
                    image={article.images}
                  />
                  <button onClick={() => deleteHandler(article._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ListArticleScreen;
