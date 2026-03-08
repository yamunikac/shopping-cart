import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => setProducts(data));
}, []);

return ( <div className="products-page">

  <div className="products-wrapper">

    <h2 className="products-title">Our Products</h2>

    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

  </div>

</div>

);
};

export default ProductList;
