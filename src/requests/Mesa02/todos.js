import api from "../../services/Mesa02/api";

export async function getTodos() {
  return await api.get("/todo");
}

/**
 * Função para adicionar nova tarefa
 * @param {{title: string, date: Date}} todo
 */
export async function addTodo(todo) {
  return (await api.post("/todo", todo)).data;
}

/**
 * Função para editar uma tarefa
 * @param {id: string, payload: {title: string, date: Date}} editedTodo 
 */
export async function editTodo(editedTodo) {
  return (await api.put(`/todo/${editedTodo.id}`, editedTodo.payload)).data;
}

/**
 * Função para deletar uma tarefa
 * @param {string} id 
 */
export async function deleteTodo(id) {
  return (await api.delete(`/todo/${id}`)).data;
}
