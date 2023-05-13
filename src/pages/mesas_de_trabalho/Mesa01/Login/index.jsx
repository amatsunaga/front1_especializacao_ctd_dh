import { useState } from "react";
import styles from "./style.module.scss";
import { useAuth } from "../../../../contexts/AuthContext/useAuth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { saveToken } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault;
    console.log(formData);
    saveToken(formData.email);
    navigate("../produtos");
  }

  return (
    <div className={styles["page-container"]}>
      <div className={styles["card-container"]}>
        <h2 className={styles["card-title"]}>Login</h2>
        <p className={styles["card-description"]}>
          Insira seus dados para entrar no sistema
        </p>
        <form action="">
          <input
            type="email"
            value={formData.email}
            className={styles["input"]}
            placeholder="E-mail"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            value={formData.password}
            className={styles["input"]}
            placeholder="Senha"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button onClick={(e) => handleSubmit(e)}>Entrar</button>
        </form>
      </div>
    </div>
  );
};
