import { Suspense } from "react";

import { Outlet } from "react-router-dom";

export const LoginLayout = () => {
   return (
      <div className="background-container">
         <div className="login-container">
            <Suspense fallback={<div>Loading...</div>}>
               <Outlet />
            </Suspense>
         </div>
      </div>
   );
};
