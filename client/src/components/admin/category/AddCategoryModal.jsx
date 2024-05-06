import { useState } from "react";
import { useCreateCategoryMutation } from "../../../slices/categoryApiSlice";
import { toast } from "react-toastify";
import { Modal, Button, Form } from "react-bootstrap";

const AddCategoryModal = () => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [createCategory] = useCreateCategoryMutation();

  const handleSave = async () => {
    await createCategory({ name: categoryName });
    toast.success("Kategori berhasil ditambahkan");
    handleClose();
  };

  return (
    <>
      <button onClick={handleShow}>Tambah Kategori</button>
      <Modal
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Kategori</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="categoryName">
              <Form.Label>Nama Kategori</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama kategori"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
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

export default AddCategoryModal;
