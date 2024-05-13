import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleRiddleQuery } from "../slices/riddleApiSlice";
import ResultRiddleModal from "../components/ResultRiddleModal";

const RiddleGameScreen = () => {
  const { id } = useParams();
  const [jawaban, setJawaban] = useState("");
  const [tersangka, setTersangka] = useState([]);

  const { data: riddle, isLoading } = useGetSingleRiddleQuery(id);

  useEffect(() => {
    if (!isLoading) setTersangka(riddle.tersangka);
  }, [riddle, isLoading]);

  return (
    <div
      style={{
        padding: "200px 100px",
        width: "100%",
        height: "auto",
        alignItems: "center",
        gap: "48px",
      }}>
      <h1>Riddle Game Screen</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{riddle.title}</h1>
          <img
            src={`http://localhost:8080/${riddle.image}`}
            alt={riddle.title}
            style={{
              width: "50%",
              height: "auto",
            }}
          />
          <h3>Kronologi :</h3>
          <p>{riddle.kronologi}</p>
          <h3>List Tersangka</h3>
          <ul>
            {tersangka.map((tersangka, index) => (
              // list tersangka
              <li key={index}>
                <strong>{tersangka.tersangka}</strong>
                <p>Alibi :</p>
                <p>{tersangka.alibi}</p>
              </li>
            ))}
          </ul>
          <h3>Siapakah Pembunuhnya?</h3>
          <select onChange={(e) => setJawaban(e.target.value)}>
            <option value="">Pilih Pelaku</option>
            {tersangka.map((tersangka, index) => (
              <option
                key={index}
                value={tersangka.tersangka}>
                {tersangka.tersangka}
              </option>
            ))}
          </select>
          <ResultRiddleModal
            id={id}
            jawaban={jawaban}
          />
        </div>
      )}
    </div>
  );
};

export default RiddleGameScreen;
