import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./style.module.scss";
import { useMesa01Products } from "../../../contexts/Mesa01ProductsContext/useMesa01Products";
import { Mesa01ProductCard } from "../../../components/Mesa01ProductCard";

// import { SlickSlider } from "../../../../components/SlickSlider";

export const ProductDetailPage = () => {
  const params = useParams();
  const { products } = useMesa01Products();
  const [product, setProduct] = useState({});

  async function getProductDetails() {
    const response = await axios.get(
      `https://dummyjson.com/products/${params.id}`
    );

    setProduct(response.data);
  }

  useEffect(() => {
    getProductDetails();
  }, [params]);

  function getFirstProducts() {
    let firstProducts = [];
    let count = 0;

    for (let i = 0; i < products.length; i++) {
      if (count < 4) {
        if (JSON.stringify(products[i]) == JSON.stringify(product)) {
          continue;
        }

        firstProducts.push(products[i]);
        count++;
      }
    }

    return firstProducts;
  }

  return (
    <div className={styles["main-container"]}>
      <section className={styles["main-product"]}>
        <div className={styles["image-wrapper"]}>
          <img src={product.thumbnail} alt={product.description} />
        </div>
        <div>
          <div className={styles["text-wrapper"]}>
            <h3 className={styles["item-name"]}>{product.title}</h3>
            <h4 className={styles["item-category"]}>{product.category}</h4>
            <p className={styles["item-price"]}>R$ {product.price},00</p>
          </div>
          <div className={styles["description-card"]}>
            <p>{product.description}</p>
          </div>
        </div>
      </section>

      <section className={styles["others-section"]}>
        <h2 className={styles["section-title"]}>Veja outros produtos</h2>
        <div>
          {/* <SlickSlider /> */}
          <ul className={styles["others-list"]}>
            {getFirstProducts().map((product) => (
              <Link to={`../produtos/${product.id}`} key={product.id}>
                <li>
                  <Mesa01ProductCard product={product} />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
