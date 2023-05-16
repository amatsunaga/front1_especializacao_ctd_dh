import { RegisterTaskCard } from "./components/RegisterTaskCard";
import { TaskCard } from "./components/TaskCard";
import styles from "./style.module.scss";

export const Mesa02 = () => {
  return (
    <div className={styles["mesa-02"]}>
      <aside>
        <RegisterTaskCard />
      </aside>
      <main>
        <div className={styles["title-container"]}>
          <h2 className={styles["page-title"]}>Minhas Tarefas</h2>
          <p className={styles["tasks-total"]}>Total: x tarefas</p>
        </div>
        <ul>
          <li>
            <TaskCard />
          </li>
        </ul>
      </main>
    </div>
  );
};
