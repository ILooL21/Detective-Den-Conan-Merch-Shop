import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../slices/productApiSlice";
import { useGetAllCategoriesQuery } from "../slices/categoryApiSlice";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProductNotFoundScreen from "./ProductNotFoundScreen";
import "../styles/KatalogScreen.css";

const KatalogScreen = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const { data: products, isLoading } = useGetAllProductsQuery();
  const { data: categories } = useGetAllCategoriesQuery();

  const countProducts = (categoryName) => {
    return products?.filter((product) => product.category === categoryName).length;
  };

  useEffect(() => {
    let updatedList = products;
    if (searchParams.has("search")) {
      const regex = new RegExp(searchParams.get("search"), "i");
      updatedList = products?.filter((product) => regex.test(product.name));
    }
    if (searchParams.has("category")) {
      updatedList = updatedList?.filter((product) => product.category === searchParams.get("category"));
    }
    setList(updatedList);
  }, [products, searchParams]);

  const handleCategoryChange = (categoryName) => {
    //jika category checked, kemudian di-uncheck maka hapus category dari searchParams
    if (searchParams.has("category") && searchParams.get("category") === categoryName) {
      searchParams.delete("category");
      navigate(`?${searchParams.toString()}`);
      return;
    }
    searchParams.set("category", categoryName);
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <div className="container-katalog">
      <h1>Katalog Screen</h1>
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h1>Products</h1>
            <div>
              <h3>Categories</h3>
              {categories &&
                categories.map(
                  (category) =>
                    countProducts(category.name) > 0 && (
                      <div key={category._id}>
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
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {list && list.length > 0 ? (
                list.map((product) => (
                  <Card
                    key={product._id}
                    style={{ width: "18rem", margin: "0.5rem", cursor: "pointer" }}
                    onClick={() => navigate(`/product/${product._id}`)}>
                    <Card.Img
                      variant="top"
                      src={`http://localhost:8080/${product.image}`}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.price}</Card.Text>
                      <Card.Text>{product.category}</Card.Text>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <ProductNotFoundScreen />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KatalogScreen;
