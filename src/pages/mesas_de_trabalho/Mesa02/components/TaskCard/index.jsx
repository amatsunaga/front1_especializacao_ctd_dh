import editIcon from "../../assets/svg/FiEdit.svg";
import removeIcon from "../../assets/svg/FiTrash2.svg";

import styles from "./style.module.scss";

export const TaskCard = () => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-details"]}>
        <h3 className={styles["task-title"]}>Tarefa x</h3>
        <h4 className={styles["task-category"]}>Categoria x</h4>
        <p className={styles["task-description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum
          pharetra est in efficitur
        </p>
      </div>
      <div className={styles["card-info"]}>
        <p className={styles["card-date"]}>25/03/2023</p>
        <div className={styles["buttons-wrapper"]}>
          <img className={styles["edit-button"]} src={editIcon} alt="" />
          <img className={styles["remove-button"]} src={removeIcon} alt="" />
        </div>
      </div>
    </div>
  );
};
