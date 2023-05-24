import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteAluno,
  editAluno,
  getAlunos,
  saveAluno,
} from "../../requests/Mesa03/alunos";
import { toast } from "react-toastify";

export default function useAluno() {
  const queryClient = useQueryClient();

  const { data, isFetching, error } = useQuery(["@alunos"], getAlunos, {
    refetchOnWindowFocus: false,
  });

  const { mutate: addAlunoMutate } = useMutation(saveAluno, {
    onSuccess: () => {
      queryClient.invalidateQueries(["@alunos"]);
      toast.success("Aluno adicionado com sucesso!");
    },
    onError: () => {
      toast.error("Erro ao adicionar o aluno");
    },
  });

  const EditAlunoMutate = useMutation(editAluno, {
    onSuccess: () => {
      queryClient.invalidateQueries(["@alunos"]);
      toast.success("Dados editados com sucesso!");
    },
    onError: () => {
      toast.error("Erro ao editar os dados");
    },
  });

  const DeleteAlunoMutate = useMutation(deleteAluno, {
    onSuccess: () => {
      queryClient.invalidateQueries(["@alunos"]);
      toast.success("Aluno excluído com sucesso");
    },
    onError: () => {
      toast.error("Erro ao excluir o aluno");
    },
  });

  return {
    alunos: data,
    isFetching,
    error,
    addAluno: addAlunoMutate,
    editAluno: EditAlunoMutate.mutate,
    deleteAluno: DeleteAlunoMutate.mutate,
  };
}
