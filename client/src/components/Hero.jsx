import { Link } from "react-router-dom";
import RefreshToken from "../components/RefreshToken";
import RenderOnViewportEntry from "../components/controlComponents/RenderOnViewportEntry";
import { lazy } from "react";
const BestRatingProduct = lazy(() => import("../components/Home/BestRatingProduct"));
const NewRiddle = lazy(() => import("../components/Home/NewRiddle"));
const NewProduct = lazy(() => import("../components/Home/NewProduct"));
const NewArticle = lazy(() => import("../components/Home/NewArticle"));
import "../styles/Hero.css";

const Hero = () => {
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
        <div>
          <h2 className="mt-5">All Article</h2>
        </div>

        <div className="container-view-products">
          <button className="view-product">
            <Link to="/katalog">View All Products</Link>
          </button>
        </div>
        <div className="">
          <div>
            <div style={{ height: "10vh" }}></div>
            <RenderOnViewportEntry threshold={0.5}>
              <BestRatingProduct />
            </RenderOnViewportEntry>
          </div>
          <div>
            <div style={{ height: "10vh" }}></div>
            <RenderOnViewportEntry threshold={0.5}>
              <NewRiddle />
            </RenderOnViewportEntry>
          </div>
          <div>
            <div style={{ height: "10vh" }}></div>
            <RenderOnViewportEntry threshold={0.5}>
              <NewProduct />
            </RenderOnViewportEntry>
          </div>
          <div>
            <div style={{ height: "10vh" }}></div>
            <RenderOnViewportEntry threshold={0.5}>
              <NewArticle />
            </RenderOnViewportEntry>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
