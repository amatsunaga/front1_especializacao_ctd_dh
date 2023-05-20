import { useContext } from "react";
import useTodo from "../../../../../hooks/Aula06/useTodo";
import { getTodos } from "../../../../../requests/Mesa02/todos";
import styles from "./style.module.scss";
import { FormDataContext } from "../../../../../contexts/Mesa02/FormDataContext";

export const RegisterTaskCard = () => {
  const { formData, setFormData, initialState, taskId, setTaskId } =
    useContext(FormDataContext);

  // const [formError, setFormError] = useState();

  const { addTodo, editTodo } = useTodo();

  function handleSubmit(e) {
    e.preventDefault();

    if (taskId) {
      editTodo({
        id: taskId,
        payload: {
          title: formData.title,
          date: formData.date,
          category: formData.category,
          description: formData.description,
        },
      });
    } else {
      addTodo({
        title: formData.title,
        date: formData.date,
        category: formData.category,
        description: formData.description,
      });
    }
    setFormData(initialState);
    setTaskId("");
    // getTodos();
    // window.location.reload();
  }

  return (
    <div className={styles["card-container"]}>
      <h3 className={styles["card-title"]}>Cadastrar Tarefa</h3>
      <form action="">
        <div>
          <input
            type="text"
            required
            placeholder="Título"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <span className={styles["required-message"]}>Campo obrigatório </span>
        </div>
        <select
          name="category"
          id="category"
          // placeholder="Categoria"
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
          {formData.category ? (
            <option value={formData.category}>{formData.category}</option>
          ) : (
            <option value="" hidden>
              Categoria
            </option>
          )}

          <option value="Trabalho">Trabalho</option>
          <option value="Lazer">Lazer</option>
          <option value="Prioridade">Prioridade</option>
          <option value="Outros">Outros</option>
        </select>
        <input
          type="date"
          placeholder="Data"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />

        <button onClick={(e) => handleSubmit(e)}>Salvar</button>
      </form>
    </div>
  );
};
