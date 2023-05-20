import { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

const FormDataProvider = (props) => {
  const initialState = {
    title: "",
    category: "",
    date: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialState);

  const [taskId, setTaskId] = useState("");

  return (
    <FormDataContext.Provider
      value={{ formData, setFormData, initialState, taskId, setTaskId }}
    >
      {props.children}
    </FormDataContext.Provider>
  );
};

export { FormDataContext, FormDataProvider };
