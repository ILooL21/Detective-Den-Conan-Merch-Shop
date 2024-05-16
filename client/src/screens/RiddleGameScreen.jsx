import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import { useGetSingleRiddleQuery } from "../slices/riddleApiSlice";
import ResultRiddleModal from "../components/ResultRiddleModal";
import "../styles/RiddleGameScreen.css";

const RiddleGameScreen = () => {
  const { id } = useParams();
  const [jawaban, setJawaban] = useState("");
  const [tersangka, setTersangka] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const { data: riddle, isLoading } = useGetSingleRiddleQuery(id);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsDisabled(false);
    }, 60000);
    if (isClicked) {
      setTimeout(() => {
        setIsDisabled(true);
      }, 10000);
    }
  }, [isClicked, setIsDisabled]);

  useEffect(() => {
    if (!isLoading) setTersangka(riddle.tersangka);
  }, [riddle, isLoading]);

  return (
    <div className="container-riddle-game-screen">
      <div className="container-riddle-game-screen-header">
        <Breadcrumb
          className="breadcrumb-riddle-game-screen"
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="/riddle">List Riddle</a>,
            },
            {
              title: "Riddle Game Screen",
            },
          ]}
        />
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container-riddle-game-screen-body">
          <h1>{riddle.title}</h1>
          <img
            src={`http://localhost:8080/${riddle.image}`}
            alt={riddle.title}
          />
          <hr />
          <h3>Kronologi</h3>
          <p className="kronologi-game-screen">{riddle.kronologi}</p>
          <h3>List Tersangka</h3>
          <div className="list-tersangka-game-screen">
            {tersangka.map((tersangka, index) => (
              // list tersangka
              <div className="tersangka-game-screen" key={index}>
                <h5>{tersangka.tersangka}</h5>
                <p>Alibi:</p>
                <p>{tersangka.alibi}</p>
              </div>
            ))}
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "900px",
              position: "relative",
            }}
          >
            <h3>Siapakah Pembunuhnya?</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                position: "absolute",
                right: "0",
                gap: "0px",
              }}
            >
              <label className="label-game-screen">Click and Hover me</label>
              <div
                className={`tooltip-game-screen ${
                  isDisabled ? "disabled" : ""
                }`}
                onClick={handleClick}
                style={{ pointerEvents: isDisabled ? "none" : "auto" }}
              >
                Clue
                {!isDisabled && isClicked && (
                  <span className="tooltiptext-game-screen">{riddle.clue}</span>
                )}
              </div>
            </div>
          </div>
          <div className="container-radio-game-screen">
            {tersangka.map((tersangka, index) => (
              <div key={index} className="radio-game-screen">
                <input
                  type="radio"
                  id={`tersangka-${index}`}
                  name="tersangka"
                  value={tersangka.tersangka}
                  onChange={(e) => setJawaban(e.target.value)}
                />
                <label htmlFor={`tersangka-${index}`}>
                  {tersangka.tersangka}
                </label>
              </div>
            ))}
          </div>
          <ResultRiddleModal id={id} jawaban={jawaban} />
        </div>
      )}
    </div>
  );
};

export default RiddleGameScreen;
