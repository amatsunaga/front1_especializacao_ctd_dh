import {
  //   BrowserRouter,
  //   Route,
  RouterProvider,
  //   Routes,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Mesa01 } from "../pages/mesas_de_trabalho/Mesa01";
import { ProductDetailPage } from "../pages/mesas_de_trabalho/Mesa01/ProductDetailPage";
import { ProductsPage } from "../pages/mesas_de_trabalho/Mesa01/ProductsPage";
import { Aula02 } from "../pages/aulas/Aula02/Aula02";
import { Home } from "../pages/home";
import { NotFound } from "../pages/not-found";
import { Aula03 } from "../pages/aulas/Aula03";
import { Login } from "../pages/mesas_de_trabalho/Mesa01/Login";
import { Aula04 } from "../pages/aulas/Aula04";
import { Mesa02 } from "../pages/mesas_de_trabalho/Mesa02";
import Aula05 from "../pages/aulas/Aula05";
import Aula06 from "../pages/aulas/Aula06";
import { Mesa03 } from "../pages/mesas_de_trabalho/Mesa03";
import { Aula07 } from "../pages/aulas/Aula07";
import { Mesa03Tailwind } from "../pages/mesas_de_trabalho/Mesa03Tailwind";

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
        { path: "", loader: () => redirect("login") },
        {
          path: "login",
          element: <Login />,
        },
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
    { path: "mesa-02", element: <Mesa02 /> },
    { path: "mesa-03", element: <Mesa03 /> },
    { path: "mesa-03-tailwind", element: <Mesa03Tailwind /> },
    { path: "aula-02", element: <Aula02 /> },
    { path: "aula-03", element: <Aula03 /> },
    { path: "aula-04", element: <Aula04 /> },
    { path: "aula-05", element: <Aula05 /> },
    { path: "aula-06", element: <Aula06 /> },
    { path: "aula-07", element: <Aula07 /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={appRouter} />;

  // function Layout({children}) {
  //   return (
  //     <div>
  //       <nav style={{height: 80, width: "100%", background: "purple"}}>
  //         <center>
  //           <h1>Título do sistema</h1>
  //         </center>
  //       </nav>
  //       {children}
  //     </div>
  //   )
  // }
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/product" element={<ProductsPage />} />
  //       <Route path="/outlet" element={
  //         <Layout>
  //           <Home />
  //         </Layout>
  //       }
  //       />
  //       <Route path="*" element={<NotFound />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}
