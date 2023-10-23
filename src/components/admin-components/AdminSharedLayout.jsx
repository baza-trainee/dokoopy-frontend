import { Suspense, useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { useAppContext } from "../provider-components/app-provider";
import { AdminApi } from "../../api/api";
import { useLoadingData } from "../../hook/useLoadingData";

import { AdminHeader } from "./AdminHeader";
import { AdminAside } from "./AdminAside";

export const AdminSharedLayout = () => {
   const { isLoading } = useAppContext();
   const navigate = useNavigate();

   useEffect(() => {
      const currentStatusInterval = setInterval(checkCurrentStatus, 60000);
      return () => {
         clearInterval(currentStatusInterval);
      };
   });

   function checkCurrentStatus() {
      AdminApi.getCurrentAdmin().then(response => {
         if (response.status === 401) {
            navigate("/login");
         }
      });
   }

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
