import { AuthProvider } from "./contexts/AuthContext/useAuth";
import { Mesa01ProductsProvider } from "./contexts/Mesa01ProductsContext/useMesa01Products";
import { FormDataProvider } from "./contexts/Mesa02/FormDataContext";
import RoutesConfig from "./routes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <FormDataProvider>
        <AuthProvider>
          <Mesa01ProductsProvider>
            <RoutesConfig />
          </Mesa01ProductsProvider>
        </AuthProvider>
      </FormDataProvider>
    </QueryClientProvider>
  );
}
