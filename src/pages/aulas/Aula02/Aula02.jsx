import { useRef } from "react";

export const Aula02 = () => {
  //   const [valor, setValor] = useState("");

  const inputRef = useRef(null);
  const divRef = useRef(null);

  function handleCheck() {
    const inputValue = inputRef.current.value;

    if (inputValue < 0) {
      divRef.current.style.backgrounColor = "#f05656";
    } else {
      divRef.current.style.backgrounColor = "#4846e2";
    }
  }

  return (
    <div ref={divRef}>
      <h1>Hello World</h1>

      <input
        ref={inputRef}
        // value={valor}
        // onChange={(event) => setValor(event.target.value)}
        placeholder="Digite um valor"
      />

      <button onClick={handleCheck}>Verificar</button>
    </div>
  );
};
