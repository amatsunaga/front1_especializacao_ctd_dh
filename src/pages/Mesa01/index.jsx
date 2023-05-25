import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { useAuth } from "../../contexts/AuthContext/useAuth";

export const Mesa01 = () => {
  const { auth, removeToken } = useAuth();
  // const [email, setEmail] = useState(auth);
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault;
    removeToken();
    navigate("../mesa-01/login");
  };

  return (
    <div className={styles["mesa-01"]}>
      <header className={styles["header-container"]}>
        <Link to={"/"} className={styles["home-link"]}>
          Home
        </Link>
        <Link to={auth ? "/mesa-01/produtos" : "/mesa-01"}>
          <h1 className={styles["page-title"]}>Shop Products</h1>
        </Link>
        {auth && (
          <div className={styles["user-info"]}>
            <p className={styles["user-email"]}>{auth}</p>
            <button
              className={styles["logout-button"]}
              onClick={(e) => logout(e)}
            >
              Sair
            </button>
          </div>
        )}
      </header>
      <main className={styles["main-container"]}>
        <Outlet />
      </main>
      <footer className={styles["footer-container"]}>
        <p>Todos os direitos reservados | 2023</p>
      </footer>
    </div>
  );
};
