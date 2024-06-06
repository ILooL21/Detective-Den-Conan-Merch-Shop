import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../slices/productApiSlice";
import { useGetAllCategoriesQuery } from "../slices/categoryApiSlice";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import ProductNotFoundScreen from "./ProductNotFoundScreen";
import "../styles/KatalogScreen.css";

const KatalogScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("newest");

  const { data: products, isLoading } = useGetAllProductsQuery();
  const { data: categories } = useGetAllCategoriesQuery();

  const countProducts = (categoryName) => {
    return products?.filter((product) => product.category === categoryName).length;
  };

  useEffect(() => {
    let updatedList = products || [];
    if (searchParams.has("search")) {
      const regex = new RegExp(searchParams.get("search"), "i");
      updatedList = products?.filter((product) => regex.test(product.name));
    }
    if (searchParams.has("category")) {
      updatedList = updatedList?.filter((product) => product.category === searchParams.get("category"));
    }

    const sortProducts = (productsList) => {
      switch (sortCriteria) {
        case "rating":
          return [...productsList].sort((a, b) => b.rating - a.rating);
        case "priceLowToHigh":
          return [...productsList].sort((a, b) => a.price - b.price);
        case "priceHighToLow":
          return [...productsList].sort((a, b) => b.price - a.price);
        case "newest":
          return [...productsList].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        default:
          return productsList;
      }
    };
    setList(sortProducts(updatedList));
  }, [products, searchParams, sortCriteria]);

  const handleCategoryChange = (categoryName) => {
    if (searchParams.has("category") && searchParams.get("category") === categoryName) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", categoryName);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="container-katalog-screen">
      <div className="container-katalog-screen-header">
        <Breadcrumb
          className="breadcrumb-katalog-screen"
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: "Katalog",
            },
          ]}
        />
      </div>
      <div className="container-katalog-screen-body">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className="container-katalog-screen-filter">
              <h3>Categories</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  gap: "16px",
                  width: "100%",
                  padding: "8px 16px",
                  flexWrap: "wrap",
                }}>
                {categories &&
                  categories.map(
                    (category) =>
                      countProducts(category.name) > 0 && (
                        <div
                          key={category._id}
                          className="katalog-screen-filter">
                          <input
                            type="checkbox"
                            name="category"
                            value={category.name}
                            onChange={() => handleCategoryChange(category.name)}
                            checked={searchParams.has("category") && searchParams.get("category") === category.name}
                          />
                          <label>{category.name}</label>
                        </div>
                      )
                  )}
              </div>
            </div>
            <div className="container-katalog-screen-sort">
              <h5>Urutkan :</h5>
              <div className="select-dropdown">
                <select
                  onChange={(e) => setSortCriteria(e.target.value)}
                  value={sortCriteria}>
                  <option value="newest">Terbaru</option>
                  <option value="rating">Rating Tertinggi</option>
                  <option value="priceLowToHigh">Harga Terendah</option>
                  <option value="priceHighToLow">Harga Tertinggi</option>
                </select>
              </div>
            </div>
            <div className="container-katalog-screen-card">
              {list && list.length > 0 ? (
                list.map((product) => (
                  <Card
                    key={product._id}
                    className="card-katalog-screen"
                    onClick={() => navigate(`/product/${product._id}`)}>
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
                ))
              ) : (
                <ProductNotFoundScreen />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default KatalogScreen;
