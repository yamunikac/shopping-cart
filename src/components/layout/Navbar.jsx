import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Simple Store</h2>
      <button className="cart-btn">🛒 Cart (0)</button>
    </nav>
  );
};

export default Navbar;
