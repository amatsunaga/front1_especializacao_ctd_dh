import { Link, Outlet } from "react-router-dom";
import styles from "./Mesa01.module.scss";

export const Mesa01 = () => {
  return (
    <>
      <header className={styles["header-container"]}>
        <Link to={"/mesa-01"}>
          <h1 className={styles["page-title"]}>Shop Products</h1>
        </Link>
      </header>
      <main className={styles["main-container"]}>
        <Outlet />
      </main>
    </>
  );
};
