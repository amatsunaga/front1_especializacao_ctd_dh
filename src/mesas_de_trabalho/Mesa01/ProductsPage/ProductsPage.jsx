import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductsPage.module.scss";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  }

  return (
    <ul className={styles["grid-container"]}>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`${product.id}`}>
            <div className={styles["card-container"]}>
              <div className={styles["image-wrapper"]}>
                <img src={product.thumbnail} alt={product.description} />
              </div>
              <div className={styles["text-wrapper"]}>
                <h3 className={styles["item-name"]}>{product.title}</h3>
                <h4 className={styles["item-category"]}>{product.category}</h4>
                <p className={styles["item-price"]}>R$ {product.price},00</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
