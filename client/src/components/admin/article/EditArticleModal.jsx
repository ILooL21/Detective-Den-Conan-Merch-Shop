import { useState } from "react";
import PropType from "prop-types";
import { useUpdateArticleMutation } from "../../../slices/articleApiSlice";
import { Modal, Button, Form } from "react-bootstrap";

const EditArticleModal = (props) => {
  let articleId = props.articleId;
  let judul = props.judul;
  let isi = props.isi;
  let image = props.image;

  const [show, setShow] = useState(false);
  const [judulArticle, setJudulArticle] = useState(judul);
  const [isiArticle, setIsiArticle] = useState(isi);
  const [imageArticle, setImageArticle] = useState(image);
  const [preview, setPreview] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updateArticle] = useUpdateArticleMutation();

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("image", imageArticle);
    formData.append("id", articleId);
    formData.append("judul", judulArticle);
    formData.append("isi", isiArticle);
    await updateArticle(formData);
    window.location.reload();
  };

  const handleImage = (e) => {
    setImageArticle(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <button onClick={handleShow}>Edit</button>
      <Modal
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Artikel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="judulArticle">
              <Form.Label>Judul Artikel</Form.Label>
              <Form.Control
                type="text"
                value={judulArticle}
                onChange={(e) => setJudulArticle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="imageArticle">
              <Form.Label>Gambar</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImage}
              />
              {preview ? (
                <img
                  src={preview}
                  style={{ width: "100px" }}
                />
              ) : (
                <img
                  src={`http://localhost:8080/${imageArticle}`}
                  style={{ width: "100px" }}
                />
              )}
            </Form.Group>
          </Form>
          <Form.Group controlId="isiArticle">
            <Form.Label>Isi Artikel</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={isiArticle}
              onChange={(e) => setIsiArticle(e.target.value)}
            />
          </Form.Group>
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

EditArticleModal.propTypes = {
  articleId: PropType.string.isRequired,
  judul: PropType.string,
  isi: PropType.string,
  image: PropType.string,
};

export default EditArticleModal;
