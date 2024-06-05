import { useEffect, useState } from "react";
import { useGetAllRiddlesQuery } from "../../slices/riddleApiSlice";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/Home/NewRiddle.css";

const NewRiddle = () => {
  const [listRiddle, setListRiddle] = useState([]);
  const navigate = useNavigate();
  const { data: riddles, isLoading } = useGetAllRiddlesQuery();
  useEffect(() => {
    if (!isLoading && riddles) {
      const updatedList = riddles
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4);

      setListRiddle(updatedList);
    }
  }, [riddles, isLoading, setListRiddle]);
  return (
    <>
    <div>
      <h1 className="title-new-riddle">New Riddle</h1>
    </div>
      <div className="container-new-riddle">
        <Carousel>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : listRiddle && listRiddle.length > 0 ? (
            listRiddle?.map((riddle) => (
              <Carousel.Item
              className="new-riddle"
                key={riddle._id}
                onClick={() => navigate(`/riddle/${riddle._id}`)}
              >
                <img
                  src={`http://localhost:8080/${riddle.image}`}
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "contain",
                  }}
                />
                <Carousel.Caption className="body-new-riddle">
                  <h5>{riddle.title}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          ) : (
            <h1>No riddles found</h1>
          )}
        </Carousel>
      </div>
    </>
  );
};
export default NewRiddle;
