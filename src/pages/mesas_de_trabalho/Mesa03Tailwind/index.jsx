import { useState } from "react";
import { Mesa03Form } from "./components/Mesa03Form";
import { Mesa03Table } from "./components/Mesa03Table";
import './index.css';
import { ToastContainer } from "react-toastify";

export const Mesa03Tailwind = () => {
  const initialState = {
    id: "",
    nome: "",
    matricula: "",
    curso: "",
    bimestre: "",
  };

  const [formData, setFormData] = useState(initialState);

  return (
    <div className="bg-[#050915] min-h-screen text-white px-20 py-10 font-poppins">
      <h1 className="text-3xl font-bold mb-10">Diário Eletrônico</h1>
      <Mesa03Form formData={formData} setFormData={setFormData} />
      <Mesa03Table formData={formData} setFormData={setFormData} />
      <ToastContainer />
    </div>
  );
};
