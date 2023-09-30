import { Outlet } from "react-router-dom";

import { AdminProvider } from "../provider-components/admin-provider";

import { AdminHeader } from "./AdminHeader";
import { AdminFooter } from "./AdminFooter";
import { AdminAside } from "./AdminAside";

export const AdminSharedLayout = () => {
   return (
      <AdminProvider>
         <div className="main-wrapper">
            <AdminAside></AdminAside>
            <div className="body-wrapper">
               <AdminHeader></AdminHeader>
               <main className="admin-backdrop">
                  <Outlet />
               </main>
               <AdminFooter></AdminFooter>
            </div>
         </div>
      </AdminProvider>
   );
};
