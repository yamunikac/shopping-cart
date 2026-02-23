import { useContext } from "react";
import { CartContext } from "../cart/CC";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";   // 🔥 IMPORTANT

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <h2 className="logo">Simple Store</h2>

      <button
        className="cart-btn"
        onClick={() => navigate("/shopping-cart/cart")}
      >
        🛒 Cart ({totalItems})
      </button>
    </nav>
  );
};

export default Navbar;