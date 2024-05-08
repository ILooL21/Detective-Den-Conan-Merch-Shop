import { useState } from "react";
import { useCreateArticleMutation } from "../../../slices/articleApiSlice";
import { Modal, Button, Form } from "react-bootstrap";

const AddArticleModal = () => {
  const [show, setShow] = useState(false);
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [createArticle] = useCreateArticleMutation();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("judul", judul);
    formData.append("isi", isi);
    console.log(formData.get("image"));
    await createArticle(formData);
    window.location.reload();
  };

  return (
    <>
      <button onClick={handleShow}>Tambah Artikel</button>
      <Modal
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Artikel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="judul">
              <Form.Label>Judul</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan judul artikel"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Gambar</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImage}
              />
              {preview ? (
                <img
                  src={preview}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                    marginTop: "10px",
                  }}
                />
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group controlId="isi">
              <Form.Label>Isi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukkan isi artikel"
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
              />
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

export default AddArticleModal;
