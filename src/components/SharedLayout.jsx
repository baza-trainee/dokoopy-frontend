import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const SharedLayout = () => {
   return (
      <div>
         <div className="header-wrapper">
            <Header></Header>
         </div>
         <Outlet />
         <Footer></Footer>
      </div>
   );
};
