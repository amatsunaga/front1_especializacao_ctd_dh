import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteAluno,
  editAluno,
  getAlunos,
  saveAluno,
} from "../../requests/Mesa03/alunos";

export default function useAluno() {
  const queryClient = useQueryClient();

  const { data, isFetching, error } = useQuery(["@alunos"], getAlunos, {
    refetchOnWindowFocus: false,
  });

  const { mutate: addAlunoMutate } = useMutation(saveAluno, {
    onSuccess: () => queryClient.invalidateQueries(["@alunos"]),
    onError: () => alert("Erro ao adicionar o aluno"),
  });

  const EditAlunoMutate = useMutation(editAluno, {
    onSuccess: () => queryClient.invalidateQueries(["@alunos"]),
    onError: () => alert("Erro ao editar os dados"),
  });

  const DeleteAlunoMutate = useMutation(deleteAluno, {
    onSuccess: () => queryClient.invalidateQueries(["@alunos"]),
    onError: () => alert("Erro ao deletar o aluno"),
  });

  return {
    todos: data,
    isFetching,
    error,
    addAluno: addAlunoMutate,
    editAluno: EditAlunoMutate.mutate,
    deleteAluno: DeleteAlunoMutate.mutate,
  };
}
