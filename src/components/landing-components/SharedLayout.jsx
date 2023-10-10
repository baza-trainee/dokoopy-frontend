// import { LandingProvider } from "../provider-components/landing-provider";

import { Outlet } from "react-router-dom";
import { Footer } from "../landing-components/Footer";
import { Header } from "../landing-components/Header";
import { useAppContext } from "../provider-components/app-provider";
import { Contacts } from "../sections/Contacts";

export const SharedLayout = () => {
   const { language } = useAppContext();
   return (
      <div className="wrapper-general">
         <div className="header-wrapper">
            <Header></Header>
         </div>
         <main className="wrapper-general-main">
            <Outlet testPropsShared={"testPropsShared"} />
         </main>
         <Contacts />
         <Footer />
      </div>
   );
};
