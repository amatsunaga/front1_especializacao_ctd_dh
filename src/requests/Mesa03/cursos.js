import api from "../../services/Mesa03/api";

// export default async function getCursos() {
// }

export async function getCursos() {
  return await api.get("/cursos");
}
