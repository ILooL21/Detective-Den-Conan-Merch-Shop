import { useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, Rate } from "antd";
import { TruckOutlined, RetweetOutlined } from "@ant-design/icons";
import {
  useGetSingleProductQuery,
  // useReviewsProductMutation,
} from "../slices/productApiSlice";
import { useAddProductToCartMutation } from "../slices/cartApiSlice";
import { toast } from "react-toastify";
import "../styles/ProductDetailScreen.css";

const ProductDetailScreen = () => {
  let { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  // const { userInfo } = useSelector((state) => state.auth);
  // const [userRating, setUserRating] = useState("");

  const { data: product, isLoading } = useGetSingleProductQuery(id);
  const [addProductToCart] = useAddProductToCartMutation();
  // const [ReviewProduct] = useReviewsProductMutation();

  const handleAddProductToCart = async () => {
    try {
      const data = {
        image: product.image,
        product: product.name,
        price: product.price,
        quantity: quantity,
      };
      await addProductToCart(data);
      toast.success("Product added to cart");
    } catch (error) {
      console.error(error);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // const ReviewHandle = async (rating) => {
  //   if (rating === "") return;
  //   try {
  //     const data = {
  //       id: product._id,
  //       rating: rating,
  //     };
  //     await ReviewProduct(data);
  //     refetch();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   if (product && product.review) {
  //     const userReview = product.review.find(
  //       (review) => review.name === userInfo.name
  //     );
  //     if (userReview) {
  //       setUserRating(userReview.rating);
  //     }
  //   }
  // }, [product, userInfo]);

  return (
    <div className="container-detail-product">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container-detail-product-header">
          <Breadcrumb
            className="breadcrumb-detail-product"
            items={[
              {
                title: <a href="/">Home</a>,
              },
              {
                title: <a href="/katalog">Katalog</a>,
              },
              {
                title: <p>{product.name}</p>,
              },
            ]}
          />
        </div>
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container-detail-product-body">
          <div className="container-detail-product-main">
            <img
              className="image-product-detail"
              src={`http://localhost:8080/${product.image}`}
            />
            <div className="container-detail-product-title">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: "0px",
                  border: "1px solid #c4c4c4",
                  borderRadius: "8px",
                  padding: "16px",
                }}>
                <h1>{product.name}</h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "40px",
                    margin: "0",
                    padding: "0",
                    gap: "8px",
                  }}>
                  <a className="detail-product-rating">{product.rating}</a>
                  {/* <Rate value={userRating}
                    onChange={(e) => ReviewHandle(e.target.value)}/> */}
                  <Rate
                    className="rating-icon-product"
                    disabled
                    value={product.rating}
                  />
                  {/* <select
                    value={userRating}
                    onChange={(e) => ReviewHandle(e.target.value)}
                  >
                    <option value="">Select Rating</option>
                    {[...Array(5).keys()].map((x) => (
                      <option key={x} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select> */}
                  <span
                    style={{
                      color: "#000",
                      fontSize: "24px",
                      height: "100%",
                      padding: "0",
                      marginBottom: "4px",
                    }}>
                    |
                  </span>
                  <a className="detail-product-stock">Stock: {product.countInStock}</a>
                </div>
                <span className="detail-product-price">Rp. {product.price}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "160px",
                  margin: "0",
                }}>
                <p className="detail-product-description">{product.description}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    gap: "24px",
                  }}>
                  {/* <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  /> */}
                  <div className="product-quantity">
                    <input
                      type="button"
                      value="-"
                      className="quantity-minus"
                      onClick={handleDecrement}
                      disabled={quantity <= 1}
                    />
                    <input
                      type="number"
                      step="1"
                      min="1"
                      name="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      title="Qty"
                      className="input-text-quantity"
                      size="4"
                      pattern=""
                    />
                    <input
                      type="button"
                      value="+"
                      className="quantity-plus"
                      onClick={handleIncrement}
                      disabled={product.countInStock === 0 || product.countInStock <= quantity}
                    />
                  </div>
                  <button
                    className="button-product-to-cart"
                    onClick={handleAddProductToCart}
                    disabled={product.countInStock === 0}>
                    {product.countInStock === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>
                </div>
              </div>
              <div className="container-detail-product-delivery">
                <div className="detail-product-delivery-first">
                  <TruckOutlined />
                  <div className="product-delivery-first-text">
                    <h6>Free Delivery</h6>
                    <a>Enter your postal code for Delivery Availability</a>
                  </div>
                </div>
                <div className="detail-product-delivery-second">
                  <RetweetOutlined />
                  <div className="product-delivery-second-text">
                    <h6>Return Delivery</h6>
                    <a>Free 30 Days Delivery Returns. Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailScreen;
