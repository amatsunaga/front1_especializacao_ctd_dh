import editIcon from "../../assets/svg/FiEdit.svg";
import removeIcon from "../../assets/svg/FiTrash2.svg";

import { useContext } from "react";
import useTodo from "../../../../../hooks/Aula06/useTodo";
import styles from "./style.module.scss";
import { FormDataContext } from "../../../../../contexts/Mesa02/FormDataContext";

export const TaskCard = (props) => {
  const dueDate = props.date.split("T")[0].split("-");
  const { deleteTodo } = useTodo();
  const { setFormData, setTaskId } = useContext(FormDataContext);

  // function fillStates(todo) {
  //   setId(todo._id);
  //   setTitle(todo.title);
  //   setDate(todo.date);
  // }

  function handleEdit() {
    setFormData({
      title: props.title,
      date: props.date.split("T")[0],
      category: props.category,
      description: props.description,
    });
    setTaskId(props.id);
  }

  function handleDelete() {
    confirm("Tem certeza de que deseja excluir a tarefa?")
      ? deleteTodo(props.id)
      : null;
  }

  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-details"]}>
        <h3 className={styles["task-title"]}>{props.title}</h3>
        <h4 className={styles["task-category"]}>
          {props.category ? props.category : "Sem categoria definida"}
        </h4>
        <p className={styles["task-description"]}>
          {props.description
            ? props.description
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdumpharetra est in efficitur"}
        </p>
      </div>
      <div className={styles["card-info"]}>
        <p
          className={styles["card-date"]}
        >{`${dueDate[2]}/${dueDate[1]}/${dueDate[0]}`}</p>
        <div className={styles["buttons-wrapper"]}>
          <img
            className={styles["edit-button"]}
            src={editIcon}
            alt=""
            // onClick={() => mutate(props.id, {title: "Título editado", date: new Date()})}
            // onClick={() => fillStates()}
            onClick={() => handleEdit()}
          />
          <img
            className={styles["remove-button"]}
            src={removeIcon}
            alt=""
            onClick={() => handleDelete()}
          />
        </div>
      </div>
    </div>
  );
};
