import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const Mesa01ProductsContext = createContext();

export function Mesa01ProductsProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  }

  return (
    <Mesa01ProductsContext.Provider value={{ products, setProducts }}>
      {props.children}
    </Mesa01ProductsContext.Provider>
  );
}

export function useMesa01Products() {
  const context = useContext(Mesa01ProductsContext);
  return context;
}
