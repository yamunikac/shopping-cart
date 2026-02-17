import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        style={styles.image}
      />

      <h4>{product.title}</h4>

      <p>Price: ${product.price}</p>

      <button style={styles.button}>View Details</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
  },
  image: {
    width: "150px",
    height: "150px",
    objectFit: "contain",
  },
  button: {
    padding: "6px 12px",
    backgroundColor: "gray",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ProductCard;
