import { Outlet } from "react-router-dom";

// import { AdminProvider } from "../provider-components/admin-provider";

import { AdminHeader } from "./AdminHeader";
// import { AdminFooter } from "./AdminFooter";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../provider-components/app-provider";
import { AdminAside } from "./AdminAside";
export const AdminSharedLayout = () => {
   const { loggedIn } = useAppContext();

   if (!loggedIn) {
      return <Navigate to={"/login"} />;
   }

   return (
      <div className="main-wrapper">
         <AdminAside></AdminAside>
         <div className="body-wrapper">
            <AdminHeader></AdminHeader>
            <main className="admin-backdrop">
               <Outlet />
            </main>
         </div>
      </div>
   );
};
