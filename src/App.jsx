import Navbar from "./components/layout/Navbar";
import ProductList from "./components/Products/ProductList";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/cart/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/shopping-cart/" element={<ProductList />} />
        <Route path="/shopping-cart/product/:id" element={<ProductDetails />} />
        <Route path="/shopping-cart/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;