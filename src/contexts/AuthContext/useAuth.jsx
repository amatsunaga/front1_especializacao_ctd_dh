import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const authLocalStorage = localStorage.getItem("auth");

  const [auth, setAuth] = useState(
    authLocalStorage === null ? "" : authLocalStorage
  );

  const saveToken = (tokenReceived) => {
    if (tokenReceived !== auth) {
      setAuth(tokenReceived);
      localStorage.setItem("auth", tokenReceived);
    }
  };

  const removeToken = () => {
    setAuth("");
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, saveToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
