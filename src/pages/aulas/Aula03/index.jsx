import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../../home";
import { ProductsPage } from "../../mesas_de_trabalho/Mesa01/ProductsPage";
import { NotFound } from "../../not-found";

export const Aula03 = () => {
  //   function Layout({ children }) {
  //     return (
  //       <div>
  //         <nav style={{ height: 80, width: "100%", background: "purple" }}>
  //           <center>
  //             <h1>Título do sistema</h1>
  //           </center>
  //         </nav>
  //         {/* <Outlet /> */}
  //         {children}
  //         <footer style={{ background: "purple" }}>
  //           Todos os direitos reservados
  //         </footer>
  //       </div>
  //     );
  //   }

  return (
    <h1>Aula 3</h1>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/product" element={<ProductsPage />} />
    //     <Route
    //       path="/outlet"
    //       element={
    //         <Layout>
    //           <Home />
    //         </Layout>
    //       }
    //     />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
  );
};
