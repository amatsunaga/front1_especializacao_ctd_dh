import styles from "./style.module.scss";

export const RegisterTaskCard = () => {
  return (
    <div className={styles["card-container"]}>
      <h3 className={styles["card-title"]}>Cadastrar Tarefa</h3>
      <form action="">
        <input type="text" placeholder="Título" />
        <select name="" id="" placeholder="Categoria">
          <option value="" selected>
            Categoria
          </option>
          <option value="">Trabalho</option>
          <option value="">Lazer</option>
          <option value="">Prioridade</option>
          <option value="">Outros</option>
        </select>
        <input type="text" placeholder="Data" />
        <input type="text" placeholder="Descrição" />

        <button>Salvar </button>
      </form>
    </div>
  );
};
