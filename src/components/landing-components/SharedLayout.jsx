// import { LandingProvider } from "../provider-components/landing-provider";

import { useAppContext } from "../provider-components/app-provider";

import { Outlet } from "react-router-dom";
import { Footer } from "../landing-components/Footer";
import { Header } from "../landing-components/Header";

export const SharedLayout = () => {
   const AppContext = useAppContext();
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
