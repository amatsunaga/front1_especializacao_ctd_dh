import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  async function getProductDetails() {
    const response = await axios.get(
      `https://dummyjson.com/products/${params.id}`
    );

    setProduct(response.data);
  }

  useEffect(() => {
    getProductDetails();
  }, [params]);

  return (
    <>
      <h1>Página de Produto</h1>
      {console.log(product)}
    </>
  );
};
