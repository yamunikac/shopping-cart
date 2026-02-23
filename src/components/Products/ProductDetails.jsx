import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../cart/CC";
import "./ProductDetails.css";   // 🔥 IMPORTANT

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/shopping-cart/cart");
  };

  const handleBuyNow = () => {
    alert("Proceed to payment");
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>

        <div className="details-buttons">
          <button className="add-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button className="buy-btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;