import PropType from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useAnswerRiddleMutation } from "../slices/riddleApiSlice";
import { toast } from "react-toastify";
import "../styles/ResultRiddleModal.css";

const ResultRiddleModal = (props) => {
  let id = props.id;
  let jawaban = props.jawaban;

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [pelaku, setPelaku] = useState("");
  const [alasan, setAlasan] = useState("");

  const [answerRiddle, isLoading] = useAnswerRiddleMutation();

  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/riddle");
  };
  const handleShow = async () => {
    if (jawaban === "") {
      toast.error("Jawaban tidak boleh kosong");
      return;
    }
    const res = await answerRiddle({ id: id, answer: jawaban });
    setMessage(res.data.message);
    setPelaku(res.data.answer.pelaku);
    setAlasan(res.data.answer.alasan);
    if (isLoading) {
      setShow(true);
    }
  };

  return (
    <>
      <div className="container-button-game-screen">
        <button onClick={handleShow}>Lihat Hasil</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hasil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message === "Correct" ? (
            <div className="alert alert-primary" role="alert">
              Jawaban Benar
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              Jawaban Salah
            </div>
          )}
          <p>Pelaku : {pelaku}</p>
          <p>Alasan : {alasan}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ResultRiddleModal.propTypes = {
  id: PropType.string.isRequired,
  jawaban: PropType.string.isRequired,
};

export default ResultRiddleModal;
