import { Outlet } from "react-router-dom";
import styles from "./Mesa01.module.scss";

export const Mesa01 = () => {
  return (
    <>
      <header className={styles["header-container"]}>
        <h1 className={styles["page-title"]}>Shop Products</h1>
      </header>
      <main className={styles["main-container"]}>
        <Outlet />
      </main>
    </>
  );
};
