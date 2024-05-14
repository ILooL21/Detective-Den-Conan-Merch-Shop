import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetAllRiddlesQuery,
  useDeleteRiddleMutation,
} from "../slices/riddleApiSlice";
import AddRiddleModal from "../components/admin/riddle/AddRiddleModal";
import { FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Breadcrumb } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import "../styles/ListRiddleScreen.css";

const ListRiddleScreen = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const { data: riddles, isLoading } = useGetAllRiddlesQuery();
  const [deleteRiddle] = useDeleteRiddleMutation();

  const navigate = useNavigate();

  useEffect(() => {
    setList(riddles);
  }, [riddles]);

  const searchHandler = () => {
    if (search !== "") {
      const regex = new RegExp(search, "i");
      const results = riddles?.filter((riddle) => {
        return regex.test(riddle.title);
      });
      if (results.length === 0) {
        toast.error("Riddle tidak ditemukan");
        setList(riddles);
      } else {
        setList(results);
      }
    } else {
      setList(riddles);
    }
  };

  const deleteHandler = async (riddleId) => {
    await deleteRiddle({ id: riddleId });
    window.location.reload();
  };

  const EditRedirect = (riddleId) => {
    navigate(`/editriddle/${riddleId}`);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchHandler();
  };

  return (
    <div className="container-list-riddle">
      <div className="container-list-riddle-header">
        <Breadcrumb
          className="breadcrumb-list-riddle"
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="/dashboard">Dashboard</a>,
            },
            {
              title: "List Riddle",
            },
          ]}
        />
      </div>
      <form onSubmit={searchSubmit}>
        <div className="container-search-riddle">
          <div className="button-add-riddle">
            <AddRiddleModal />
          </div>
          <div className="d-flex">
            <input
              className="input-search-riddle"
              type="text"
              placeholder="Search by title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "200px" }}
            />
            <Button
              type="submit" // Menjadikan button sebagai tombol submit
              className="button-list-riddle"
            >
              <FaSearch />
            </Button>
          </div>
        </div>
      </form>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <table className="table-list-product">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Thumbnail</th>
              <th>Jumlah Tersangka</th>
              <th>Clue</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((riddle, index) => (
              <tr key={riddle._id}>
                <td>{index + 1}</td>
                <td>{riddle.title}</td>
                <td>
                  <img
                    src={`http://localhost:8080/${riddle.image}`}
                    alt={riddle.title}
                    style={{
                      width: "160px",
                      height: "auto",
                    }}
                  />
                </td>
                <td>{riddle.tersangka.length}</td>
                <td>
                  {riddle.clue == ""
                    ? "Setting Clue terlebih dahulu"
                    : riddle.clue}
                </td>
                <td>
                  <div className="container-action-product">
                    <div className="container-edit-product">
                      <button onClick={() => EditRedirect(riddle._id)}>
                        <EditOutlined />
                      </button>
                    </div>
                    <div className="container-delete-product">
                      <button onClick={() => deleteHandler(riddle._id)}>
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

export default ListRiddleScreen;
