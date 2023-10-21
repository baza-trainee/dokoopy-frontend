import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { useAppContext } from "../provider-components/app-provider";

import { Footer } from "../landing-components/Footer";
import { Header } from "../landing-components/Header";

// import { Contacts } from "../sections/Contacts";

export const SharedLayout = () => {
   const AppContext = useAppContext();

   return (
      <div className="wrapper-general">
         <div className="header-wrapper">
            <Header></Header>
         </div>
         <main className="wrapper-general-main">
            <Suspense fallback={<div>Loading...</div>}>
               <Outlet />
            </Suspense>
         </main>
         <Footer></Footer>
      </div>
   );
};
