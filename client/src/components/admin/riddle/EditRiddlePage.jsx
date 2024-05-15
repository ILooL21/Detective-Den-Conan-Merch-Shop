import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleRiddleQuery,
  useUpdateRiddleMutation,
  useAddTersangkaMutation,
  useDeleteTersangkaMutation,
} from "../../../slices/riddleApiSlice";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { Breadcrumb } from "antd";
("@ant-design/icons");
import "../../../styles/riddle/EditRiddlePage.css";

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

  useEffect(() => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  }, [kronologi]);

  return (
    <div className="container-edit-riddle">
      <div className="container-edit-riddle-header">
        <Breadcrumb
          className="breadcrumb-edit-riddle"
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="/dashboard">Dashboard</a>,
            },
            {
              title: <a href="/listriddles">List Riddle</a>,
            },
            {
              title: "Edit Riddle",
            },
          ]}
        />
      </div>
      {isLoading && riddle ? (
        <p>Loading...</p>
      ) : (
        <>
          <Form className="container-form-edit-riddle">
            <div className="container-form-edit-riddle-hint">
              <h3>Add Hint</h3>
              <Form.Group
                controlId="image"
                className="container-form-edit-riddle-image"
              >
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                {preview ? (
                  <img src={preview} alt="preview" />
                ) : (
                  <img src={`http://localhost:8080/${image}`} alt="preview" />
                )}
              </Form.Group>
              <Form.Group
                controlId="title"
                className="container-form-edit-riddle-title"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                controlId="kronologi"
                className="container-form-edit-riddle-kronologi"
              >
                <Form.Label>Kronologi</Form.Label>
                <Form.Control
                  as="textarea"
                  value={kronologi}
                  onChange={(e) => setKronologi(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                controlId="clue"
                className="container-form-edit-riddle-clue"
              >
                <Form.Label>Clue</Form.Label>
                <Form.Control
                  type="text"
                  value={clue}
                  onChange={(e) => setClue(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="container-form-edit-riddle-add-tersangka">
              <h3>Add Tersangka</h3>
              <Form.Group
                controlId="tersangka"
                className="container-form-edit-riddle-tersangka"
              >
                <Form.Label>Nama Tersangka</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setNama(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                controlId="alibi"
                className="container-form-edit-riddle-alibi"
              >
                <Form.Label>Alibi</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(e) => setAlibi(e.target.value)}
                />
              </Form.Group>
              <div className="container-button-add-tersangka">
                <button onClick={handleAddTersangka}>Add Tersangka</button>
              </div>
              <Form.Label>List Tersangka</Form.Label>

              {tersangka?.length > 0 ? (
                tersangka.map((tersangka, index) => (
                  <div className="container-list-tersangka" key={index}>
                    <span></span>
                    <h5>Tersangka {index + 1}</h5>
                    <p>
                      <b>{tersangka.tersangka}</b>
                    </p>
                    <p>Alibi: {tersangka.alibi}</p>
                    <div className="container-button-edit-riddle">
                      <button
                        className="button-submit-edit-riddle"
                        onClick={(e) => {
                          e.preventDefault();
                          setPelaku(tersangka.tersangka);
                        }}
                      >
                        Pilih Tersangka
                      </button>
                      <button
                        className="button-delete-edit-riddle"
                        onClick={() =>
                          handleDeleteTersangka(tersangka.tersangka)
                        }
                      >
                        Hapus Tersangka
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>Tidak ada Tersangka</p>
              )}
            </div>
            <Form.Group
              controlId="answer"
              className="container-form-edit-riddle-pelaku"
            >
              <Form.Label>Pelaku</Form.Label>
              <Form.Control type="text" value={pelaku} disabled></Form.Control>
              <Form.Label>Alasan</Form.Label>
              <Form.Control
                as="textarea"
                value={alasan !== null ? alasan : ""}
                onChange={(e) => setAlasan(e.target.value)}
              />
            </Form.Group>
            <div className="container-button-save-riddle">
              <button onClick={handleSave}>Save Riddle</button>
            </div>
          </Form>
        </>
      )}
    </div>
  );
};

export default EditRiddlePage;
