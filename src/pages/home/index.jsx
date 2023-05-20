import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useAuth } from "../../contexts/AuthContext/useAuth";

export const Home = () => {
  const { auth } = useAuth();

  return (
    <>
      <header className={styles["header-container"]}>
        <div>Logo</div>
        <nav>
          <ul>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Título Principal</h1>
        <h3>Mesas de Trabalho</h3>
        <ul>
          <Link to={auth ? "mesa-01/produtos" : "mesa-01"}>
            <li>Mesa 01 - Shop Products</li>
          </Link>
          <Link to={"mesa-02"}>
            <li>Mesa 02 - To Do</li>
          </Link>
        </ul>
        <h3>Aulas</h3>
        <ul>
          <Link to={"/aula-03"}>
            <li>Aula 03</li>
          </Link>
          <Link to={"/aula-04"}>
            <li>Aula 04 - PropTypes</li>
          </Link>
          <Link to={"/aula-05"}>
            <li>Aula 05 - React Queries</li>
          </Link>
        </ul>
      </main>
      <footer></footer>
    </>
  );
};
