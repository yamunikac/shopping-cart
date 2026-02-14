import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>ShopEase</h1>
      <button style={styles.button}>
        🛒 Cart (0)
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#222",
    color: "white",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  button: {
    padding: "8px 15px",
    backgroundColor: "orange",
    border: "none",
    cursor: "pointer",
  },
};

export default Navbar;
