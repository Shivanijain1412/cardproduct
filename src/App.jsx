import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./assets/ProductCard";

const App = () => {
  const [products, setProducts] = useState([]);

  // Fetch product data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Product List</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
