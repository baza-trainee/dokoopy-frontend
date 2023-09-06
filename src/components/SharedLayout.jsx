import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const SharedLayout = () => {
   return (
      <div>
         <Header></Header>
         <Outlet />
         <Footer></Footer>
      </div>
   );
};
