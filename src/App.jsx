import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Mesa01 } from "./mesas_de_trabalho/Mesa01/Mesa01";
import { ProductDetailPage } from "./mesas_de_trabalho/Mesa01/ProductDetailPage/ProductDetailPage";
import { ProductsPage } from "./mesas_de_trabalho/Mesa01/ProductsPage/ProductsPage";

function App() {
  const appRouter = createBrowserRouter([
    // {
    //   path: "",
    //   element: <MainLayout />,
    //   children: [
    //     {
    //       path: "mesa-01",
    //       element: <Mesa01 />
    //     },
    //   ],
    // },
    {
      path: "mesa-01",
      element: <Mesa01 />,
      children: [
        { path: "", loader: () => redirect("produtos") },
        {
          path: "produtos",
          element: <ProductsPage />,
        },
        {
          path: "produtos/:id",
          element: <ProductDetailPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
