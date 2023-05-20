import { useState } from "react";
import useTodo from "../../../hooks/Aula06/useTodo";

export default function Aula06() {
  const { todos, error, isFetching, addTodo, editTodo } = useTodo();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

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
        <button onClick={() => addTodo({ title, date })}></button>
      </div>
      <div>
        <h1>Hello App</h1>
        {/* {JSON.stringify(todos)} */}
        {JSON.stringify(todos)}
      </div>
    </>
  );
}
