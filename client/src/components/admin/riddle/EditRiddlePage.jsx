import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleRiddleQuery, useUpdateRiddleMutation, useAddTersangkaMutation, useDeleteTersangkaMutation } from "../../../slices/riddleApiSlice";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const EditRiddlePage = () => {
  let { id } = useParams();

  const { data: riddle, isLoading } = useGetSingleRiddleQuery(id);
  const [updateRiddle] = useUpdateRiddleMutation();
  const [addTersangka] = useAddTersangkaMutation();
  const [deleteTersangka] = useDeleteTersangkaMutation();

  const [title, setTitle] = useState("");
  const [kronologi, setKronologi] = useState("");
  const [tersangka, setTersangka] = useState([]);
  const [clue, setClue] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [nama, setNama] = useState("");
  const [alibi, setAlibi] = useState("");
  const [pelaku, setPelaku] = useState("");
  const [alasan, setAlasan] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();
    if (!title || !kronologi || !clue || !pelaku || !alasan) {
      toast.error("Title, kronologi, clue, pelaku, dan alasan harus diisi");
      return;
    }
    const formData = new FormData();
    formData.append("id", id);
    formData.append("image", image);
    formData.append("title", title);
    formData.append("kronologi", kronologi);
    formData.append("clue", clue);
    formData.append("pelaku", pelaku);
    formData.append("alasan", alasan);
    await updateRiddle(formData).unwrap();
    window.location.reload();
  };

  const handleAddTersangka = async () => {
    if (!nama || !alibi) {
      toast.error("Nama dan alibi harus diisi");
    }
    await addTersangka({ id, tersangka: nama, alibi: alibi });
    window.location.reload();
  };

  const handleDeleteTersangka = async (nama) => {
    await deleteTersangka({ id, tersangka: nama });
    window.location.reload();
  };

  useEffect(() => {
    if (riddle) {
      setTitle(riddle.title);
      setKronologi(riddle.kronologi);
      setTersangka(riddle.tersangka);
      setClue(riddle.clue);
      setImage(riddle.image);
      if (riddle.answer.length > 0) {
        setPelaku(riddle.answer[0].pelaku);
        setAlasan(riddle.answer[0].alasan);
      }
    }
  }, [riddle]);

  return (
    <div
      style={{
        padding: "25vh 100px",
      }}>
      <h1>Edit Riddle</h1>
      {isLoading && riddle ? (
        <p>Loading...</p>
      ) : (
        <>
          <Form>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setPreview(URL.createObjectURL(e.target.files[0]));
                }}
              />
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
              ) : (
                <img
                  src={`http://localhost:8080/${image}`}
                  alt="preview"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
              )}
            </Form.Group>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="kronologi">
              <Form.Label>Kronologi</Form.Label>
              <Form.Control
                as="textarea"
                value={kronologi}
                onChange={(e) => setKronologi(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="clue">
              <Form.Label>Clue</Form.Label>
              <Form.Control
                type="text"
                value={clue}
                onChange={(e) => setClue(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="answer">
              <Form.Label>Pelaku</Form.Label>
              <Form.Control
                as="select"
                value={pelaku}
                onChange={(e) => setPelaku(e.target.value)}>
                {tersangka?.length > 0 ? (
                  tersangka?.map((tersangka, index) => (
                    <option
                      key={index}
                      value={tersangka.tersangka}>
                      {tersangka.tersangka}
                    </option>
                  ))
                ) : (
                  <option value="">No Tersangka</option>
                )}
              </Form.Control>
              <Form.Label>alasan</Form.Label>
              <Form.Control
                as="textarea"
                value={alasan !== null ? alasan : ""}
                onChange={(e) => setAlasan(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={handleSave}>
              Save
            </Button>
          </Form>
          <Form>
            <Form.Label>List Tersangka</Form.Label>
            {tersangka?.length > 0 ? (
              tersangka.map((tersangka, index) => (
                <ul key={index}>
                  <li>{tersangka.tersangka}</li>
                  <p>{tersangka.alibi}</p>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteTersangka(tersangka.tersangka)}>
                    Delete
                  </Button>
                </ul>
              ))
            ) : (
              <p>No Tersangka</p>
            )}
            <Form.Group controlId="tersangka">
              <Form.Label>Nama Tersangka</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setNama(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="alibi">
              <Form.Label>Alibi</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => setAlibi(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={handleAddTersangka}>
              Add Tersangka
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default EditRiddlePage;
