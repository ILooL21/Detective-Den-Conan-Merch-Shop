import { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../slices/productApiSlice";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/Home/NewProduct.css";

const NewProduct = () => {
  const [listProductNew, setListProductNew] = useState([]);
  const navigate = useNavigate();
  const { data: productsNew, isLoading } = useGetAllProductsQuery();
  useEffect(() => {
    if (!isLoading && productsNew) {
      const updatedList = productsNew
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 8);

      setListProductNew(updatedList);
    }
  }, [productsNew, isLoading, setListProductNew]);
  return (
    <>
    <div>
      <h1 className="title-new-product">New Product</h1>
    </div>
      <div className="container-new-product">
        {listProductNew &&
          listProductNew.length > 0 &&
          listProductNew.map((product) => (
            <Card
              key={product._id}
              className="new-product"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <Card.Img
                variant="top"
                src={`http://localhost:8080/${product.image}`}
              />
              <Card.Body className="body-new-product">
                <h5>{product.name}</h5>
                <div>
                  <p>
                    {product.price?.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }) ?? "Rp 0,00"}
                  </p>
                  <a>{product.rating}⭐</a>
                </div>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
};
export default NewProduct;
