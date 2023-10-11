import { Navigate } from "react-router-dom";
import { useAppContext } from "../provider-components/app-provider";

export const RestrictedRoute = ({ component: Component, redirectTo = "/admin" }) => {
   const { loggedIn } = useAppContext();

   return loggedIn ? <Navigate to={redirectTo} /> : Component;
};
