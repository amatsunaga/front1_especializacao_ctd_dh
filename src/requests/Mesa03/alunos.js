import api from "../../services/Mesa03/api";

export async function getAlunos() {
  return await api.get("/aluno");
}

/**
 * Função para adicionar um aluno
 * @param {{nome: string, matricula: string curso: string, bimestre: string}} body
 */
export async function saveAluno(body) {
  return await api.post("/aluno", body).data;
}

/**
 * Função para editar os dados de um aluno
 * @param {id: string, paylod: {nome: string, matricula: string curso: string, bimestre: string}} editedAluno
 */
export async function editAluno(editedAluno) {
  return (await api.put(`/aluno/${editedAluno.id}`, editedAluno)).data;
}

/**
 * Função para deleter um aluno
 * @param {string} id
 */
export async function deleteAluno(id) {
  return (await api.delete(`/aluno/${id}`)).data;
}
