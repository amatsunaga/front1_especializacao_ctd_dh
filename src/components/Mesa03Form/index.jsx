import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import useAluno from "../../hooks/Mesa03/useAluno";
import { getCursos } from "../../requests/Mesa03/cursos";
import styles from "./style.module.scss";
import { Mesa03FormDataContext } from "../../contexts/Mesa03/Mesa03FormDataContext";

export function Mesa03Form() {
  const { formData, setFormData, studentId } = useContext(
    Mesa03FormDataContext
  );

  const { data, isFetching } = useQuery(["@cursos"], getCursos, {
    refetchOnWindowFocus: false,
  });

  const { addAluno, editAluno } = useAluno();

  //   const { mutate, error } = useMutation(saveAluno);
  //   const { mutate, error } = useMutation(() => saveAluno({ ...formData }));
  // const { mutate, error } = useMutation(saveAluno, {
  //   onSuccess: () => alert("Salvo com sucesso"),
  //   onError: () => alert("Erro ao salvar dados"),
  // });

  console.log("data: ", data?.data?.cursos);

  function save(e) {
    //   mutate();
    e.preventDefault();

    // if (studentId) {
    //   editAluno({
    //     id: studentId,
    //     payload: {
    //       nome: formData.nome,
    //       matricula: formData.matricula,
    //       curso: formData.curso,
    //       bimestre: formData.bimestre,
    //     },
    //   });
    // } else {
    addAluno({
      nome: formData.nome,
      matricula: formData.matricula,
      curso: "Front End II", //formData.curso,
      bimestre: formData.bimestre,
    });
  }

  // if (error) {
  //   return <h3>Erro ao salvar o aluno...</h3>;
  // }

  if (isFetching) {
    return <h2>Carregando...</h2>;
  }

  return (
    <form className={styles["form-container"]}>
      <input
        type="text"
        placeholder="Nome"
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
      />
      <input
        type="text"
        placeholder="Matrícula"
        value={formData.matricula}
        onChange={(e) =>
          setFormData({ ...formData, matricula: e.target.value })
        }
      />
      <select
        name="curso"
        id="curso"
        value={formData.curso}
        onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
      >
        {/* {formData.curso ? (
          <option value={formData.name}>{formData.name}</option>
        ) : (
          <option value="" hidden>
            Curso
          </option>
        )} */}

        {data?.data?.cursos?.map((curso) => {
          <option value={curso.name}>{curso.name}</option>;
        })}
      </select>
      <input
        type="text"
        placeholder="Bimestre"
        value={formData.bimestre}
        onChange={(e) => setFormData({ ...formData, bimestre: e.target.value })}
      />
      <button onClick={(e) => save(e)}>Salvar</button>
    </form>
  );
}
