import { AuthProvider } from "./contexts/AuthContext/useAuth";
import { Mesa01ProductsProvider } from "./contexts/Mesa01ProductsContext/useMesa01Products";
import { FormDataProvider } from "./contexts/Mesa02/FormDataContext";
import { Mesa03FormDataProvider } from "./contexts/Mesa03/Mesa03FormDataContext";
import RoutesConfig from "./routes";

export default function App() {
  return (
    <Mesa03FormDataProvider>
      <FormDataProvider>
        <AuthProvider>
          <Mesa01ProductsProvider>
            <RoutesConfig />
          </Mesa01ProductsProvider>
        </AuthProvider>
      </FormDataProvider>
    </Mesa03FormDataProvider>
  );
}
