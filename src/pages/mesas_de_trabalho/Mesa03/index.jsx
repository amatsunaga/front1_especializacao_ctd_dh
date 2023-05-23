import { Mesa03Form } from "../../../components/Mesa03Form";
import Mesa03Table from "../../../components/Mesa03Table";
import styles from "./style.module.scss";

export const Mesa03 = () => {
  return (
    <div className={styles["page-container"]}>
      <h1 className={styles["page-title"]}>Diário Eletrônico</h1>
      <Mesa03Form />
      <Mesa03Table />
    </div>
  );
};
