import { useState } from "react";
import { useUpdateCategoryMutation } from "../../../slices/categoryApiSlice";
import PropType from "prop-types";
import { toast } from "react-toastify";
import { Modal, Button, Form } from "react-bootstrap";

const EditCategoryModal = (props) => {
  let categoryId = props.categoryId;
  let Name = props.Name;

  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState(Name);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updateCategory] = useUpdateCategoryMutation();

  const handleSave = async () => {
    await updateCategory({ id: categoryId, name: categoryName });
    toast.success("Kategori berhasil diupdate");
    handleClose();
  };

  return (
    <>
      <button onClick={handleShow}>Edit</button>
      <Modal
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Kategori</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="categoryName">
              <Form.Label>Nama Kategori</Form.Label>
              <Form.Control
                type="text"
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

EditCategoryModal.propTypes = {
  categoryId: PropType.string.isRequired,
  Name: PropType.string.isRequired,
};

export default EditCategoryModal;
