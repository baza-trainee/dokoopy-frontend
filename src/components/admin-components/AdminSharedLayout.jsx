import { Outlet } from "react-router-dom";

import { AdminHeader } from "./AdminHeader";
import { AdminFooter } from "./AdminFooter";
import { AdminAside } from "./AdminAside";

export const AdminSharedLayout = () => {
   return (
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
   );
};
