import { Outlet } from "react-router-dom";

export const LoginLayout = () => {
   return (
      <div className="background-container">
         <div className="login-container">
            <Outlet />
         </div>
      </div>
   );
};
