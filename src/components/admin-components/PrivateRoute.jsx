import { useAppContext } from "../provider-components/app-provider";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/admin" }) => {
   const { loggedIn } = useAppContext();
   const shouldRedirect = !loggedIn;

   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
