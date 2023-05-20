import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../../requests/Mesa02/todos";
import { RegisterTaskCard } from "./components/RegisterTaskCard";
import { TaskCard } from "./components/TaskCard";
import styles from "./style.module.scss";

export const Mesa02 = () => {
  const { data, isFetching, error } = useQuery(["@getTodos"], getTodos, {
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return <h3>Carregando...</h3>;
  }

  if (error) {
    return <h3>Erro ao buscar dados</h3>;
  }

  return (
    <div className={styles["mesa-02"]}>
      <aside>
        <RegisterTaskCard />
      </aside>
      <main>
        <div className={styles["title-container"]}>
          <h2 className={styles["page-title"]}>Minhas Tarefas</h2>
          <p className={styles["tasks-total"]}>
            Total: {data?.data?.length} tarefas
          </p>
        </div>
        <ul className={styles["tasks-list"]}>
          {data?.data?.map((todo, index) => (
            <li key={index}>
              <TaskCard
                title={todo.title}
                date={todo.date}
                category={todo.category}
                description={todo.description}
                id={todo._id}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
