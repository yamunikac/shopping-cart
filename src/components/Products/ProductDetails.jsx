import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../cart/CC";
import "./ProductDetails.css";

const ProductDetails = () => {

const { id } = useParams();
const navigate = useNavigate();
const { addToCart } = useContext(CartContext);

const [product, setProduct] = useState(null);
const [message, setMessage] = useState("");

const productId = Number(id);

useEffect(() => {
fetch(`https://fakestoreapi.com/products/${id}`)
.then(res => res.json())
.then(data => setProduct(data));
}, [id]);

if (!product) return <h2>Loading...</h2>;

const handleAddToCart = () => {
addToCart(product);

setMessage("✔ Product added to cart");

setTimeout(() => {
  setMessage("");
}, 2000);

};

const handleBuyNow = () => {
alert("Proceed to payment");
};

const goBack = () => {
navigate(-1);
};

const goNext = () => {
navigate(`/shopping-cart/product/${productId + 1}`);
};

const goPrevious = () => {
if (productId > 1) {
navigate(`/shopping-cart/product/${productId - 1}`);
}
};

return (
<> <div className="nav-arrow left" onClick={goPrevious}>
⬅ </div>

```
  <div className="nav-arrow right" onClick={goNext}>
    ➡
  </div>

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

        <button className="buy-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>

      {message && <p className="cart-message">{message}</p>}

    </div>
  </div>
</>

);
};

export default ProductDetails;
