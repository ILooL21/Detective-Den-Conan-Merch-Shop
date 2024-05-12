import { useState } from "react";
import { useCreateProductMutation } from "../../../slices/productApiSlice";
import { useGetAllCategoriesQuery } from "../../../slices/categoryApiSlice";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const AddProductModal = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [createProduct] = useCreateProductMutation();
  const { data: categories } = useGetAllCategoriesQuery();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSave = async () => {
    if (!category) {
      toast.error("Kategori harus dipilih");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("price", price);
    await createProduct(formData);
    window.location.reload();
  };

  return (
    <>
      <Button onClick={handleShow}>Tambah Product</Button>
      <Modal
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Nama Product</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama product"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Kategori</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value="">Pilih Kategori</option>
                {categories?.map((category) => (
                  <option
                    key={category._id}
                    value={category.name}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan deskripsi product"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan harga product"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
                  alt="preview"
                  style={{ width: "100px", height: "100px" }}
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

export default AddProductModal;
