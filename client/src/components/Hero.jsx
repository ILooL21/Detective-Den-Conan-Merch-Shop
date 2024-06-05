import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RefreshToken from "../components/RefreshToken";
import RenderOnViewportEntry from "../components/controlComponents/RenderOnViewportEntry";
// import { useGetAllProductsQuery } from "../slices/productApiSlice";
// import { useGetAllRiddlesQuery } from "../slices/riddleApiSlice";
// import { useGetAllArticlesQuery } from "../slices/articleApiSlice";
import { lazy } from "react";
const BestRatingProduct = lazy(() =>
  import("../components/Home/BestRatingProduct")
);
const NewRiddle = lazy(() => import("../components/Home/NewRiddle"));
const NewProduct = lazy(() => import("../components/Home/NewProduct"));
const NewArticle = lazy(() => import("../components/Home/NewArticle"));
import "../styles/Hero.css";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  // const [listProduct, setListProduct] = useState([]);
  // const [listRiddle, setListRiddle] = useState([]);
  // const [listProductNew, setListProductNew] = useState([]);
  // const [listArticle, setListArticle] = useState([]);
  // const { data: products, isLoading } = useGetAllProductsQuery();
  // const { data: riddles, isLoading2 } = useGetAllRiddlesQuery();
  // const { data: productsNew, isLoading3 } = useGetAllProductsQuery();
  // const { data: articles, isLoading4 } = useGetAllArticlesQuery();

  // useEffect(() => {
  // if (!isLoading && products) {
  //   const updatedList = products
  //     .slice()
  //     .sort((a, b) => b.rating - a.rating)
  //     .slice(0, 4);

  //   setListProduct(updatedList);
  // }

  // if (!isLoading2 && riddles) {
  //   const updatedList = riddles
  //     .slice()
  //     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  //     .slice(0, 4);

  //   setListRiddle(updatedList);
  // }

  // if (!isLoading3 && productsNew) {
  //   const updatedList = productsNew
  //     .slice()
  //     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  //     .slice(0, 8);

  //   setListProductNew(updatedList);
  // }

  // if (!isLoading4 && articles) {
  //   const updatedList = articles
  //     .slice()
  //     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  //     .slice(0, 4);

  //   setListArticle(updatedList);
  // }
  // }, [
  // products,
  // setListProduct,
  // isLoading,
  // riddles,
  // isLoading2,
  // setListRiddle,
  // productsNew,
  // isLoading3,
  // setListProductNew,
  // articles,
  // isLoading4,
  // setListArticle,
  // ]);
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
          <div>
            <div style={{ height: "40vh" }}></div>
            <RenderOnViewportEntry threshold={0.5}>
              <BestRatingProduct />
            </RenderOnViewportEntry>
          </div>
          <div>
            <div style={{ height: "40vh" }}></div>
            <RenderOnViewportEntry threshold={0.5}>
              <NewRiddle />
            </RenderOnViewportEntry>
          </div>
          <div>
            <div style={{ height: "40vh" }}></div>
            <RenderOnViewportEntry threshold={0.5}>
              <NewProduct />
            </RenderOnViewportEntry>
          </div>
          <div>
            <div style={{ height: "40vh" }}></div>
            <RenderOnViewportEntry threshold={0.5}>
              <NewArticle />
            </RenderOnViewportEntry>
          </div>
          {/* <BestRatingProduct />
          <NewRiddle />
          <NewProduct />
          <NewArticle /> */}
          {/* <div className="container-katalog-screen-card">
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
          </div> */}
          {/* <div className="">
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
          </div> */}
          {/* <div className="container-katalog-screen-card">
            {listProductNew &&
              listProductNew.length > 0 &&
              listProductNew.map((product) => (
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
          </div> */}
          {/* <div className="">
            <Carousel>
              {isLoading4 ? (
                <h1>Loading...</h1>
              ) : listArticle && listArticle.length > 0 ? (
                listArticle?.map((article) => (
                  <Carousel.Item
                    key={article._id}
                    onClick={() => navigate(`/article/${article._id}`)}
                  >
                    <img
                      src={`http://localhost:8080/${article.images}`}
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "contain",
                      }}
                    />
                    <Carousel.Caption>
                      <h5>{article.title}</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              ) : (
                <h1>No Article found</h1>
              )}
            </Carousel>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
