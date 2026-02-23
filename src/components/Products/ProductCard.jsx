import { useNavigate } from "react-router-dom";
import "./ProductCard.css";   // 🔥 IMPORTANT

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h4>{product.title}</h4>

      <p className="price">${product.price}</p>

      <button
        className="details-btn"
        onClick={() =>
          navigate(`/shopping-cart/product/${product.id}`)
        }
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;