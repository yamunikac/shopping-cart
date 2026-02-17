import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        style={styles.image}
      />

      <h4 style={styles.title}>{product.title}</h4>

      <p style={styles.price}>${product.price}</p>

      <button style={styles.viewButton}>View Details</button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
  },
  title: {
    fontSize: "14px",
    minHeight: "50px",
  },
  price: {
    fontWeight: "bold",
    margin: "10px 0",
  },
  viewButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProductCard;
