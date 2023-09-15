import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Contacts } from "./sections/Contacts";

export const SharedLayout = () => {
   return (
      <div>
         <Header></Header>
         <Outlet />
         <Footer></Footer>
      </div>
   );
};
