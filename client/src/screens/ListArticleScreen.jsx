import { FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { Breadcrumb } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import {
  useGetAllArticlesQuery,
  useDeleteArticleMutation,
} from "../slices/articleApiSlice";
import AddArticleModal from "../components/admin/article/AddArticleModal";
import EditArticleModal from "../components/admin/article/EditArticleModal";
import "../styles/ListArticleScreen.css";

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
      const regex = new RegExp(search, "i");
      const results = articles?.filter((article) => {
        return regex.test(article.judul);
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
    <div className="container-list-article">
      <div className="container-list-article-header">
        <Breadcrumb
          className="breadcrumb-list-article"
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="/dashboard">Dashboard</a>,
            },
            {
              title: "List Article",
            },
          ]}
        />
      </div>
      <form onSubmit={searchSubmit}>
        <div className="container-search-article">
          <div className="button-add-article">
            <AddArticleModal />
          </div>
          <div className="d-flex">
            <input
              className="input-search-article"
              type="text"
              placeholder="Search by title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "200px" }}
            />
            <Button
              type="submit" // Menjadikan button sebagai tombol submit
              className="button-list-article"
            >
              <FaSearch />
            </Button>
          </div>
        </div>
      </form>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <table className="table-list-article">
          <thead>
            <tr>
              <th>Judul</th>
              <th>Thumbnail</th>
              <th>Penulis</th>
              <th>Editor</th>
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
                    style={{
                      width: "160px",
                      height: "auto",
                    }}
                  />
                </td>
                <td>{article.penulis}</td>
                <td>{article.editor}</td>
                <td>
                  <div className="container-action-article">
                    <div className="container-edit-article">
                      <EditArticleModal
                        articleId={article._id}
                        judul={article.judul}
                        isi={article.isi}
                        image={article.images}
                      />
                    </div>
                    <div className="container-delete-article">
                      <button onClick={() => deleteHandler(article._id)}>
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

export default ListArticleScreen;
