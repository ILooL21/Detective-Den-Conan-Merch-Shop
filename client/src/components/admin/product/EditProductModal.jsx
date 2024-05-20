import { useState } from "react";
import { useUpdateProductMutation } from "../../../slices/productApiSlice";
import { useGetAllCategoriesQuery } from "../../../slices/categoryApiSlice";
import PropType from "prop-types";
import { Modal, Button, Form } from "react-bootstrap";
import { EditOutlined } from "@ant-design/icons";

const EditProductModal = (props) => {
  let productId = props.productId;
  let name = props.name;
  let price = props.price;
  let stock = props.stock;
  let description = props.description;
  let image = props.image;
  let category = props.category;

  const [show, setShow] = useState(false);
  const [productName, setProductName] = useState(name);
  const [productPrice, setProductPrice] = useState(price);
  const [productStock, setProductStock] = useState(stock);
  const [productDescription, setProductDescription] = useState(description);
  const [productCategory, setProductCategory] = useState(category);
  const [productImage, setProductImage] = useState(image);
  const [preview, setPreview] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updateProduct] = useUpdateProductMutation();
  const { data: categories } = useGetAllCategoriesQuery();

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("image", productImage);
    formData.append("id", productId);
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("stock", productStock);
    formData.append("description", productDescription);
    formData.append("category", productCategory);
    await updateProduct(formData);
    window.location.reload();
  };

  const handleImage = (e) => {
    setProductImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <button onClick={handleShow}>
        <EditOutlined />
      </button>
      <Modal
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                min="0"
                value={productStock}
                onChange={(e) => setProductStock(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}>
                {categories?.map((category) =>
                  category.name === productCategory ? (
                    <option
                      key={category._id}
                      value={category.name}
                      selected>
                      {category.name}
                    </option>
                  ) : (
                    <option
                      key={category._id}
                      value={category.name}>
                      {category.name}
                    </option>
                  )
                )}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="productImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImage}
              />
              {preview ? (
                <img
                  src={preview}
                  style={{ width: "200px" }}
                />
              ) : (
                <img
                  src={`http://localhost:8080/${productImage}`}
                  style={{ width: "200px" }}
                />
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

EditProductModal.propTypes = {
  productId: PropType.string.isRequired,
  name: PropType.string.isRequired,
  price: PropType.number.isRequired,
  stock: PropType.number.isRequired,
  description: PropType.string.isRequired,
  image: PropType.string.isRequired,
  category: PropType.string.isRequired,
};

export default EditProductModal;
