import {
  //   BrowserRouter,
  //   Route,
  RouterProvider,
  //   Routes,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Mesa01 } from "../pages/mesas_de_trabalho/Mesa01/Mesa01";
import { ProductDetailPage } from "../pages/mesas_de_trabalho/Mesa01/ProductDetailPage/ProductDetailPage";
import { ProductsPage } from "../pages/mesas_de_trabalho/Mesa01/ProductsPage/ProductsPage";
import { Aula02 } from "../pages/aulas/Aula02/Aula02";
import { Home } from "../pages/home";
import { NotFound } from "../pages/not-found";

export default function RoutesConfig() {
  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
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
    { path: "aula-02", element: <Aula02 /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={appRouter} />;

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/product" element={<ProductsPage />} />
  //       <Route path="*" element={<NotFound />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}
