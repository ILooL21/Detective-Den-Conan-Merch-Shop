import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery, useReviewsProductMutation } from "../slices/productApiSlice";
import { useAddProductToCartMutation } from "../slices/cartApiSlice";
import { toast } from "react-toastify";

const ProductDetailScreen = () => {
  let { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const { userInfo } = useSelector((state) => state.auth);
  const [userRating, setUserRating] = useState("");

  const { data: product, isLoading, refetch } = useGetSingleProductQuery(id);
  const [addProductToCart] = useAddProductToCartMutation();
  const [ReviewProduct] = useReviewsProductMutation();

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

  const ReviewHandle = async (rating) => {
    if (rating === "") return;
    try {
      const data = {
        id: product._id,
        rating: rating,
      };
      await ReviewProduct(data);
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (product && product.review) {
      const userReview = product.review.find((review) => review.name === userInfo.name);
      if (userReview) {
        setUserRating(userReview.rating);
      }
    }
  }, [product, userInfo]);

  return (
    <div
      style={{
        padding: "25vh 100px",
      }}>
      <h1>Product Detail Screen</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src={`http://localhost:8080/${product.image}`}
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                />
              </td>
              <td>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <p>{product.countInStock}</p>
                <p>{product.rating}</p>
                
                <select
                  value={userRating}
                  onChange={(e) => ReviewHandle(e.target.value)}>
                  <option value="">Select Rating</option>
                  {[...Array(5).keys()].map((x) => (
                    <option
                      key={x}
                      value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <br />
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button onClick={handleAddProductToCart}>Add to Cart</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductDetailScreen;
