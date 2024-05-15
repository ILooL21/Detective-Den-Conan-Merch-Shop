import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Card } from "react-bootstrap";
import { Breadcrumb } from "antd";
import { FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useGetAllRiddlesQuery } from "../slices/riddleApiSlice";
import "../styles/RiddleScreen.css";

const RiddleScreen = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const { data: riddles, isLoading } = useGetAllRiddlesQuery();

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

  const searchSubmit = (e) => {
    e.preventDefault();
    searchHandler();
  };

  return (
    <div className="container-riddle-screen">
      <div className="container-riddle-screen-header">
        <Breadcrumb
          className="breadcrumb-riddle-screen"
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: "List Riddle",
            },
          ]}
        />
        <form onSubmit={searchSubmit}>
          <div className="container-search-riddle-screen">
            <div className="d-flex">
              <input
                className="input-search-riddle-screen"
                type="text"
                placeholder="Search by title"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: "200px" }}
              />
              <Button
                type="submit" // Menjadikan button sebagai tombol submit
                className="button-riddle-screen"
              >
                <FaSearch />
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="container-riddle-screen-body">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : riddles && riddles.length > 0 ? (
          list?.map((riddle) => (
            <Card
              key={riddle._id}
              className="card-riddle-screen"
              onClick={() => navigate(`/riddle/${riddle._id}`)}
            >
              <Card.Img
                variant="top"
                src={`http://localhost:8080/${riddle.image}`}
              />
              <Card.Body className="card-body-riddle-screen">
                <h5 >{riddle.title}</h5>
              </Card.Body>
            </Card>
          ))
        ) : (
          <h1>No riddles found</h1>
        )}
      </div>
    </div>
  );
};

export default RiddleScreen;
