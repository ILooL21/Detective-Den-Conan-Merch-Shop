import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RefreshToken from "../components/RefreshToken";
import "../styles/Hero.css";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

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
          <p className="text-center mb-4">Selamat Datang di Toko Merch Detective conan</p>
          <div className="d-flex">
            {userInfo ? (
              <>
                <Button
                  variant="primary"
                  href="/profile"
                  className="me-3">
                  Profile
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="primary"
                  href="/login"
                  className="me-3">
                  Sign In
                </Button>
                <Button
                  variant="secondary"
                  href="/register">
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
      </div>
    </>
  );
};

export default Hero;
