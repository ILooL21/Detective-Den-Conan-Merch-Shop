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
