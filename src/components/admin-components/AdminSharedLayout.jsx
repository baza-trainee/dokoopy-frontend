import { Outlet } from "react-router-dom";

import { AdminHeader } from "./AdminHeader";
import { AdminFooter } from "./AdminFooter";
import { AdminAside } from "./AdminAside";

export const AdminSharedLayout = () => {
   return (
      <>
         <AdminAside></AdminAside>
         <AdminHeader></AdminHeader>
         <main>
            This is main body of admin panel
            <Outlet />
         </main>
         <AdminFooter></AdminFooter>
      </>
   );
};
