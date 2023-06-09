import { Link } from "react-router-dom";
import { useMesa01Products } from "../../../../contexts/Mesa01ProductsContext/useMesa01Products";
import styles from "./style.module.scss";
import { Mesa01ProductCard } from "../../../../components/Mesa01ProductCard";

export const ProductsPage = () => {
  const { products } = useMesa01Products([]);

  return (
    <div className={styles["main-container"]}>
      <ul className={styles["grid-container"]}>
        {products.map((product) => (
          <Link to={`${product.id}`} key={product.id}>
            <li>
              <Mesa01ProductCard product={product} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
