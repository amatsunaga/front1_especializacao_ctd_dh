import styles from "./style.module.scss";

export const Mesa01ProductCard = ({ product }) => {
  return (
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
  );
};
