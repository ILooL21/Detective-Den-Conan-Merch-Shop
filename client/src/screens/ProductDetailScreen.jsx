import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../slices/productApiSlice";

const ProductDetailScreen = () => {
  let { id } = useParams();

  const { data: product, isLoading } = useGetSingleProductQuery(id);

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
                <button>Add to Cart</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductDetailScreen;
