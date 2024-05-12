import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllRiddlesQuery, useDeleteRiddleMutation } from "../slices/riddleApiSlice";
import AddRiddleModal from "../components/admin/riddle/AddRiddleModal";
import { FaSearch } from "react-icons/fa";
import { Table, Button } from "react-bootstrap";
import { toast } from "react-toastify";

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
    <div
      style={{
        marginTop: "150px",
        marginInline: "50px",
      }}>
      <h1>List Riddle Screen</h1>
      <AddRiddleModal />
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
              className="btn btn-primary ms-2"
              onClick={searchHandler}>
              <FaSearch />
            </Button>
          </div>
        </div>
      </form>
      <div>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <Table
            striped
            bordered
            hover
            responsive>
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
                        width: "200px",
                        height: "200px",
                      }}
                    />
                  </td>
                  <td>{riddle.tersangka.length}</td>
                  <td>{riddle.clue == "" ? "Setting Clue terlebih dahulu" : riddle.clue}</td>
                  <td>
                    <Button
                      className="btn btn-primary"
                      onClick={() => EditRedirect(riddle._id)}>
                      Edit
                    </Button>
                    <Button
                      className="btn btn-danger"
                      onClick={() => deleteHandler(riddle._id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default ListRiddleScreen;
