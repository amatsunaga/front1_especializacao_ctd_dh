import { useEffect, useState } from "react";
import { addTodo, getTodos } from "../../../requests/Mesa02/todos";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function Aula05() {
  //   const [todos, setTodos] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   // eslint-disable-next-line no-unused-vars
  //   const [error, setError] = useState(false);

  //   useEffect(() => {
  //     getApiTodos();
  //   }, []);

  //   async function getApiTodos() {
  //     try {
  //       setLoading(true);
  //       const { data } = await getTodos();
  //       setTodos(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const queryClient = useQueryClient();
  const { data, isFetching, error } = useQuery(["@todos"], getTodos, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(addTodo, {
    onSuccess: () => queryClient.invalidateQueries(["@todos"]),
    onError: () => alert("NOK"),
  });

  //   if (loading) {
  //     return <h3>Carregando...</h3>;
  //   }

  if (isFetching) {
    return <h3>Carregando...</h3>;
  }

  if (error) {
    return <h3>Erro ao buscar dados</h3>;
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={() => mutate({ title, date })}></button>
      </div>
      <div>
        <h1>Hello App</h1>
        {/* {JSON.stringify(todos)} */}
        {JSON.stringify(data)}
      </div>
    </>
  );
}
