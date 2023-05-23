import { useQuery } from "@tanstack/react-query";
import { getAlunos } from "../../requests/Mesa03/alunos";
import styles from "./style.module.scss";

import { useContext, useRef } from "react";
import { Mesa03FormDataContext } from "../../contexts/Mesa03/Mesa03FormDataContext";
import useAluno from "../../hooks/Mesa03/useAluno";
import editIcon from "../../pages/mesas_de_trabalho/Mesa02/assets/svg/FiEdit.svg";
import removeIcon from "../../pages/mesas_de_trabalho/Mesa02/assets/svg/FiTrash2.svg";

export default function Mesa03Table() {
  const { data, isFetching } = useQuery(["@alunos"], getAlunos);
  const { formData, setFormData, setStudentId } = useContext(
    Mesa03FormDataContext
  );
    // const id = useRef();
    // const nome = useRef();
    // const matricula = useRef();
    // const curso = useRef();
    // const bimestre = useRef();

  const { deleteAluno } = useAluno();

  function handleEdit(e) {
    e.preventDefault();

    const itemId = e.target.parentNode.getAttribute("id");

    setFormData({
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });

    setStudentId(itemId);
  }

  function handleDelete(e) {
    e.preventDefault();

    const itemId = e.target.parentNode.getAttribute("id");

    confirm("Tem certeza de que deseja excluir o aluno?")
      ? deleteAluno(itemId)
      : null;
  }

  if (isFetching) {
    return <h2>Carregando...</h2>;
  }

  return (
    <section className={styles["section-container"]}>
      <h2 className={styles["section-title"]}>Alunos Cadastrados</h2>
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
          {data?.data?.map((aluno, index) => {
            return (
              <tr key={index}>
                <td className={styles["order-data"]}>{index + 1}</td>
                <td className={styles["name-data"]}>{aluno.nome}</td>
                <td className={styles["enrollment-data"]}>{aluno.matricula}</td>
                <td className={styles["course-data"]}>{aluno.curso}</td>
                <td className={styles["bimester-data"]}>{aluno.bimestre}</td>
                <td className={styles["action-data"]}>
                  <div className={styles["buttons-wrapper"]} id={aluno._id}>
                    <img
                      className={styles["edit-button"]}
                      src={editIcon}
                      alt=""
                      // onClick={() => mutate(props.id, {title: "Título editado", date: new Date()})}
                      // onClick={() => fillStates()}
                      onClick={(e) => handleEdit(e)}
                    />
                    <img
                      className={styles["remove-button"]}
                      src={removeIcon}
                      alt=""
                      onClick={(e) => handleDelete(e)}
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
