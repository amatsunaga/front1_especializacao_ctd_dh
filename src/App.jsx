import { Mesa01ProductsProvider } from "./contexts/Mesa01ProductsContext/useMesa01Products";
import RoutesConfig from "./routes";

export default function App() {
  return (
    <Mesa01ProductsProvider>
      <RoutesConfig />;
    </Mesa01ProductsProvider>
  );
}
