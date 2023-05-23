import { createContext, useState } from "react";

const Mesa03FormDataContext = createContext();

const Mesa03FormDataProvider = (props) => {
  const initialState = {
    nome: "",
    matricula: "",
    curso: "",
    bimestre: "",
  };

  const [formData, setFormData] = useState(initialState);

  const [studentId, setStudentId] = useState("");

  return (
    <Mesa03FormDataContext.Provider
      value={{ formData, setFormData, initialState, studentId, setStudentId }}
    >
      {props.children}
    </Mesa03FormDataContext.Provider>
  );
};

export { Mesa03FormDataContext, Mesa03FormDataProvider };
