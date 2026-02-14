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

      <div style={styles.buttonContainer}>
        <button style={styles.cartButton}>Add to Cart</button>
        <button style={styles.buyButton}>Buy Now</button>
      </div>
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
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  cartButton: {
    flex: 1,
    padding: "8px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  buyButton: {
    flex: 1,
    padding: "8px",
    backgroundColor: "orange",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ProductCard;
