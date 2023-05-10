// import { useState } from "react";

// export default function App() {
//   const [numero, setNumero] = useState();

//   function increment() {
//     setNumero(numero + 1);
//     setNumero((previous) => previous + 1);
//     console.log(numero);
//   }

//   return (
//     <>
//       <h1>{numero}</h1>
//       <button onClick={() => increment()}>Incrementar</button>
//     </>
//   );
// }

// export default class App2 extends React.Component {
//     render() {
//         return <h1>Hello, world</h1>
//     }
// }

import axios from "axios";
import { useEffect, useState } from "react";

function Aula01() {
  const [numero, setNumero] = useState(10);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // alert("Executei");
    getAlgumaCoisa();
  }, []);

  async function getAlgumaCoisa() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    setTodos(response.data);
  }

  function increment() {
    // setNumero(numero + 1);
    setNumero((previous) => previous + 1);
    // console.log(numero);
  }

  return (
    <>
      <h1>{numero}</h1>
      {todos.map((todo) => (
        <span key={todo.id}>{JSON.stringify(todo)}</span>
      ))}
      <button onClick={increment}>Incrementar</button>
    </>
  );
}

export default Aula01;
