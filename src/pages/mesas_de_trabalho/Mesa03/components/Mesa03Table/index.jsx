import styles from "./style.module.scss";

import useAluno from "../../../../../hooks/Mesa03/useAluno";
import editIcon from "../../../Mesa02/assets/svg/FiEdit.svg";
import removeIcon from "../../../Mesa02/assets/svg/FiTrash2.svg";

export function Mesa03Table(props) {
  const { alunos, isFetching } = useAluno();
  const { formData, setFormData, setStudentId } = props;
  const { deleteAluno } = useAluno();

  function handleEdit(e, aluno) {
    e.preventDefault();

    setFormData({
      id: aluno._id,
      nome: aluno.nome,
      matricula: aluno.matricula,
      curso: aluno.curso,
      bimestre: aluno.bimestre,
    });
  }

  function handleDelete(e, id) {
    e.preventDefault();

    confirm("Tem certeza de que deseja excluir o aluno?")
      ? deleteAluno(id)
      : null;
  }

  if (isFetching) {
    return <h2>Carregando...</h2>;
  }

  return (
    <section className={styles["section-container"]}>
      <div className={styles["section-header"]}>
        <h2 className={styles["section-title"]}>Alunos Cadastrados</h2>
        <p className={styles["students-total"]}>
          Total de alunos: {alunos?.data?.length}
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th className={styles["order-data"]}>Ordem</th>
            <th className={styles["name-data"]}>Nome</th>
            <th className={styles["enrollment-data"]}>Matrícula</th>
            <th className={styles["course-data"]}>Curso</th>
            <th className={styles["bimester-data"]}>Bimestre</th>
            <th className={styles["action-data"]}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos?.data?.map((aluno, index) => {
            return (
              <tr key={index}>
                <td className={styles["order-data"]}>{index + 1}</td>
                <td className={styles["name-data"]}>{aluno.nome}</td>
                <td className={styles["enrollment-data"]}>{aluno.matricula}</td>
                <td className={styles["course-data"]}>{aluno.curso}</td>
                <td className={styles["bimester-data"]}>{aluno.bimestre}</td>
                <td className={styles["action-data"]}>
                  <div className={styles["buttons-wrapper"]}>
                    <img
                      className={styles["edit-button"]}
                      src={editIcon}
                      alt=""
                      // onClick={() => mutate(props.id, {title: "Título editado", date: new Date()})}
                      // onClick={() => fillStates()}
                      onClick={(e) => handleEdit(e, aluno)}
                    />
                    <img
                      className={styles["remove-button"]}
                      src={removeIcon}
                      alt=""
                      onClick={(e) => handleDelete(e, aluno._id)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <ul>
        {data?.data?.map((aluno, index) => (
          <li key={index}>
            <h4>{aluno.nome}</h4>
            <p>{aluno.matricula}</p>
            <p>{aluno.curso}</p>
            <p>{aluno.bimestre}</p>
          </li>
        ))}
      </ul> */}
    </section>
  );
}
