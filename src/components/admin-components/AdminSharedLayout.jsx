import { Suspense } from "react";

import { Outlet } from "react-router-dom";

import { AdminHeader } from "./AdminHeader";

import { useAppContext } from "../provider-components/app-provider";
import { AdminAside } from "./AdminAside";
export const AdminSharedLayout = () => {
   const { isLoading } = useAppContext();

   // if (!loggedIn) {
   //    return <Navigate to={"/login"} />;
   // }

   return isLoading ? (
      <div className="main-wrapper">
         <AdminAside></AdminAside>
         <div className="body-wrapper">
            <AdminHeader></AdminHeader>
            <main className="admin-backdrop">
               <Suspense fallback={<div>Loading...</div>}>
                  <Outlet />
               </Suspense>
            </main>
         </div>
      </div>
   ) : null;
};
