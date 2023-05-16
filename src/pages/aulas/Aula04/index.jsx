import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { calculaIdade, filtraNumerosPares, getProduct } from "./utils";

export const Aula04 = () => {
  const idadeCalculada = calculaIdade(1986);

  const [titleProduct, setTitleProduct] = useState("");

  const pares = filtraNumerosPares([1, 2, 3, 4, 5, "Wesley"]);

  async function getApiProduct() {
    const { id, title, description } = await getProduct();
    setTitleProduct(title);
  }

  useEffect(() => {
    getApiProduct();
  }, []);

  return (
    <>
      <h1>{idadeCalculada}</h1>
      <h2>{pares}</h2>
      <Card name="Andrea" age={37} city="Brasília" />
    </>
  );
};
