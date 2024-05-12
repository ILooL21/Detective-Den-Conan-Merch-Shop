import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useCreateRiddleMutation } from "../../../slices/riddleApiSlice";

const AddRiddleModal = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [kronologi, setKronologi] = useState("");

  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [createRiddle] = useCreateRiddleMutation();

  const handleSave = async () => {
    if (!title || !kronologi || !image) {
      toast.error("Semua field harus diisi");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("kronologi", kronologi);
    formData.append("image", image);
    await createRiddle(formData);
    window.location.reload();
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <Button onClick={handleShow}>Tambah Riddle</Button>
      <Modal
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Riddle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Judul Riddle</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan judul riddle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="kronologi">
              <Form.Label>Kronologi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukkan kronologi"
                value={kronologi}
                onChange={(e) => setKronologi(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Gambar Riddle</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImage}
              />
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  style={{
                    width: "100%",
                    marginTop: "10px",
                  }}
                />
              ) : null}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleSave}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddRiddleModal;
