import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h4>{product.title}</h4>

      <p className="price">${product.price}</p>

      <button className="details-btn">View Details</button>
    </div>
  );
};

export default ProductCard;
