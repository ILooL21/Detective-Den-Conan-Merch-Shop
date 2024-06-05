import { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../slices/productApiSlice";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/Home/BestRatingProduct.css";

const BestRatingProduct = () => {
  const [listProduct, setListProduct] = useState([]);
  const navigate = useNavigate();
  const { data: products, isLoading } = useGetAllProductsQuery();
  useEffect(() => {
    if (!isLoading && products) {
      const updatedList = products
        .slice()
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

      setListProduct(updatedList);
    }
  }, [products, isLoading, setListProduct]);
  return (
    <>
    <div>
      <h1 className="title-best-rating-product">Best Rating Product</h1>
    </div>
      <div className="container-best-rating-product">
        {listProduct &&
          listProduct.length > 0 &&
          listProduct.map((product) => (
            <Card
              key={product._id}
              className="best-rating-product"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <Card.Img
                variant="top"
                src={`http://localhost:8080/${product.image}`}
              />
              <Card.Body className="body-best-rating-product">
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
export default BestRatingProduct;
