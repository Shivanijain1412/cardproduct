import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products); 
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  useEffect(()=>{ 
    fetchProducts();
  },[])
  // console.log(products);
  return (
    <>
      
        
    </>
  );
}

export default App;
