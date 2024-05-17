import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../slices/productApiSlice";
import { useAddProductToCartMutation } from "../slices/cartApiSlice";
import { toast } from "react-toastify";

const ProductDetailScreen = () => {
  let { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading } = useGetSingleProductQuery(id);
  const [addProductToCart] = useAddProductToCartMutation();

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
                {/* input jumlah product yang akan di masukkan ke cart*/}
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
