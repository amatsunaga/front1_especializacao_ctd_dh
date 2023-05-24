import { useState } from "react";
import { Mesa03Form } from "./components/Mesa03Form";
import { Mesa03Table } from "./components/Mesa03Table";
import styles from "./style.module.scss";

export const Mesa03 = () => {
  const initialState = {
    id: "",
    nome: "",
    matricula: "",
    curso: "",
    bimestre: "",
  };

  const [formData, setFormData] = useState(initialState);

  return (
    <div className={styles["page-container"]}>
      <h1 className={styles["page-title"]}>Diário Eletrônico</h1>
      <Mesa03Form formData={formData} setFormData={setFormData} />
      <Mesa03Table formData={formData} setFormData={setFormData} />
    </div>
  );
};
