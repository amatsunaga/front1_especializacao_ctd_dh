import { useQuery } from "@tanstack/react-query";

import useAluno from "../../../../../hooks/Mesa03/useAluno";
import { getCursos } from "../../../../../requests/Mesa03/cursos";

export function Mesa03Form(props) {
  const { formData, setFormData } = props;

  const { data, isFetching } = useQuery(["@cursos"], getCursos, {
    refetchOnWindowFocus: false,
  });

  const { addAluno, editAluno } = useAluno();

  function edit(e) {
    e.preventDefault();

    editAluno({
      id: formData.id,
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
  }

  function save(e) {
    e.preventDefault();

    addAluno({
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
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
    <form className="flex gap-6 mb-8" >
      <input
        type="text"
        className="px-4 py-2 rounded-lg grow placeholder-[#00081D] text-[#00081D]"
        placeholder="Nome"
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
      />
      <input
        type="text"
        className="px-4 py-2 rounded-lg placeholder-[#00081D] text-[#00081D]"
        placeholder="Matrícula"
        value={formData.matricula}
        onChange={(e) =>
          setFormData({ ...formData, matricula: e.target.value })
        }
      />
      <select
        name="curso"
        id="curso"
        className="px-4 py-2 rounded-lg grow text-[#00081D]"
        value={formData.curso}
        onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
      >
        {formData.curso ? (
          <option value={formData.name}>{formData.name}</option>
        ) : (
          <option value="" hidden>
            Curso
          </option>
        )}

        {data?.data?.cursos.map((curso) => (
          <option value={curso.name} key={curso.id}>
            {curso.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="px-4 py-2 rounded-lg placeholder-[#00081D] text-[#00081D]"
        placeholder="Bimestre"
        value={formData.bimestre}
        onChange={(e) => setFormData({ ...formData, bimestre: e.target.value })}
      />
      <button className="bg-blue-700 px-4 py-2 rounded-lg" onClick={(e) => (formData.id ? edit(e) : save(e))}>Salvar</button>
    </form>
  );
}
