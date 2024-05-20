import { Card, Button, Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RefreshToken from "../components/RefreshToken";
import { useGetAllProductsQuery } from "../slices/productApiSlice";
import { useGetAllRiddlesQuery } from "../slices/riddleApiSlice";
import { useEffect, useState } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [listProduct, setListProduct] = useState([]);
  const [listRiddle, setListRiddle] = useState([]);
  const { data: products, isLoading } = useGetAllProductsQuery();
  const { data: riddles, isLoading2 } = useGetAllRiddlesQuery();

  useEffect(() => {
    if (!isLoading && products) {
      const updatedList = products
        .slice()
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

      setListProduct(updatedList);
    }

    if (!isLoading2 && riddles) {
      const updatedList = riddles
        .slice() // Buat salinan dari array riddles
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt terbaru
        .slice(0, 4); // Ambil 4 item terbaru
  
      setListRiddle(updatedList);
    }
  }, [products, isLoading, setListProduct, riddles, isLoading2, setListRiddle]);
  return (
    <>
      <RefreshToken />
      <div className="container-hero">
        <div className="image-home-main-container">
          <img
            src="./src/assets/images/Conan-Home-Image.png"
            alt="Conan Home Image"
            className="image-home-main"
          />
        </div>
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Detective Den</h1>
          {userInfo ? <h2>Hello, {userInfo.name}</h2> : null}
          <p className="text-center mb-4">
            Selamat Datang di Toko Merch Detective conan
          </p>
          <div className="d-flex">
            {userInfo ? (
              <>
                <Button variant="primary" href="/profile" className="me-3">
                  Profile
                </Button>
              </>
            ) : (
              <>
                <Button variant="primary" href="/login" className="me-3">
                  Sign In
                </Button>
                <Button variant="secondary" href="/register">
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </Card>
        <div className="container-view-products">
          <button className="view-product">
            <Link to="/katalog">View All Products</Link>
          </button>
        </div>
        <div className="">
          <div className="container-katalog-screen-card">
            {listProduct &&
              listProduct.length > 0 &&
              listProduct.map((product) => (
                <Card
                  key={product._id}
                  className="card-katalog-screen"
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                  <Card.Img
                    variant="top"
                    src={`http://localhost:8080/${product.image}`}
                  />
                  <Card.Body className="card-body-katalog-screen">
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
          <div className="">
            <Carousel>
              {isLoading2 ? (
                <h1>Loading...</h1>
              ) : listRiddle && listRiddle.length > 0 ? (
                listRiddle?.map((riddle) => (
                  <Carousel.Item
                    key={riddle._id}
                    onClick={() => navigate(`/riddle/${riddle._id}`)}
                  >
                    <img
                      src={`http://localhost:8080/${riddle.image}`}
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "contain",
                      }}
                    />
                    <Carousel.Caption>
                      <h5>{riddle.title}</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              ) : (
                <h1>No riddles found</h1>
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
