import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addTodo,
  deleteTodo,
  editTodo,
  getTodos,
} from "../../requests/Mesa02/todos";

export default function useTodo() {

  const queryClient = useQueryClient();

  const { data, isFetching, error } = useQuery(["@todos"], getTodos, {
    refetchOnWindowFocus: false,
  });

  const { mutate: addTodoMutate } = useMutation(addTodo, {
    onSuccess: () => queryClient.invalidateQueries(["@todos"]),
    onError: () => alert("NOK"),
  });

  const EditTodoMutate = useMutation(editTodo, {
    onSuccess: () => queryClient.invalidateQueries(["@todos"]),
    onError: () => alert("NOK"),
  });

  const DeleteTodoMutate = useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries(["@todos"]),
    onError: () => alert("NOK"),
  });

  return {
    todos: data,
    isFetching,
    error,
    addTodo: addTodoMutate,
    editTodo: EditTodoMutate.mutate,
    deleteTodo: DeleteTodoMutate.mutate,
  };
}
