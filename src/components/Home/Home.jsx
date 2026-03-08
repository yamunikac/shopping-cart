import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate();

return ( <div className="home-container">
  <div className="home-content">
    <h1>Fashion Sale</h1>

    <p>
      Discover modern fashion and premium products
      with amazing discounts.
    </p>

    <button
      className="explore-btn"
      onClick={() => navigate("/shopping-cart/products")}
    >
      Explore Products
    </button>
  </div>

</div>

);
};

export default Home;
