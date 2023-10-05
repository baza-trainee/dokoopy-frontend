// import { LandingProvider } from "../provider-components/landing-provider";

import { Outlet } from "react-router-dom";
import { Footer } from "../landing-components/Footer";
import { Header } from "../landing-components/Header";

export const SharedLayout = () => {
   return (
      <div>
         <div className="header-wrapper">
            <Header></Header>
         </div>
         <Outlet testPropsShared={"testPropsShared"} />
         <Footer></Footer>
      </div>
   );
};
