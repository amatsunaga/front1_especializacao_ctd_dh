import useAluno from "../../../../../hooks/Mesa03/useAluno";
import editIcon from "../../../Mesa02/assets/svg/FiEdit.svg";
import removeIcon from "../../../Mesa02/assets/svg/FiTrash2.svg";

export function Mesa03Table(props) {
  const { alunos, isFetching } = useAluno();
  const { setFormData } = props;
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
    <section className="">
      <div className="flex justify-between align-middle mb-6">
        <h2 className="text-xl font-semibold">Alunos Cadastrados</h2>
        <p className="text-lg">Total de alunos: {alunos?.data?.length}</p>
      </div>
      <table className="min-w-full">
        <thead>
          <tr className="border-y border-y-[#858587]">
            <th className="py-2 px-4 font-medium text-center text-lg w-1/12">Ordem</th>
            <th className="py-2 px-4 font-medium text-left text-lg w-2/12">Nome</th>
            <th className="py-2 px-4 font-medium text-center text-lg w-2/12">Matrícula</th>
            <th className="py-2 px-4 font-medium text-left text-lg w-2/12">Curso</th>
            <th className="py-2 px-4 font-medium text-center text-lg w-2/12">Bimestre</th>
            <th className="py-2 px-4 font-medium text-center text-lg w-1/12">Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos?.data?.map((aluno, index) => {
            return (
              <tr key={index} className="border-b border-b-[#858587]">
                <td className="py-2 px-4 font-light text-center text-lg">{index + 1}</td>
                <td className="py-2 px-4 font-light text-left text-lg">{aluno.nome}</td>
                <td className="py-2 px-4 font-light text-center text-lg">{aluno.matricula}</td>
                <td className="py-2 px-4 font-light text-left text-lg">{aluno.curso}</td>
                <td className="py-2 px-4 font-light text-center text-lg">{aluno.bimestre}</td>
                <td>
                  <div className="flex justify-center gap-2">
                    <button className="transition ease-out delay-500" onClick={(e) => handleEdit(e, aluno)}>
                      <img src={editIcon} className="hover:scale-125 transition ease-in-out" />
                    </button>
                    <button onClick={(e) => handleDelete(e, aluno._id)}>
                      <img src={removeIcon} className="hover:scale-125 transition ease-in-out" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
