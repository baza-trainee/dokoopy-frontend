import { Link } from "react-router-dom";

import { useAppContext } from "../../components/provider-components/app-provider";

export const AdminNotFound = () => {
   const { token, loggedIn } = useAppContext();
   console.log(token, loggedIn);

   return (
      <div className="admin-wrapper-error">   
         <div className="admin-error-content">
            <h1 className="admin-error-title">404</h1>
            <h3 className="admin-error-text-warning">На жаль, сторінку не знайдено</h3>
            <p className="admin-error-text">Сторінка, яку ви  намагаєтесь знайти не існує, або була видалена</p>
         </div>  
            <Link to={"/admin"} className="admin-error-btn">
               Ви можете перейти на головну сторінку
            </Link>          
       </div>
   );
};