import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useGetAllRiddlesQuery } from "../slices/riddleApiSlice";

const RiddleScreen = () => {
  const navigate = useNavigate();

  const { data: riddles, isLoading } = useGetAllRiddlesQuery();

  return (
    <div
      style={{
        padding: "200px 100px",
        width: "100%",
        height: "auto",
        alignItems: "center",
        gap: "48px",
      }}>
      <h1>Riddle Screen</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
        }}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : riddles && riddles.length > 0 ? (
          riddles.map((riddle) => (
            <Card
              key={riddle._id}
              style={{
                width: "18rem",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/riddle/${riddle._id}`)}>
              <Card.Img
                variant="top"
                src={`http://localhost:8080/${riddle.image}`}
              />
              <Card.Body>
                <Card.Title>{riddle.title}</Card.Title>
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
