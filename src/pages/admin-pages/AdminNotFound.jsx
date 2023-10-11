import { Link } from "react-router-dom";

export const AdminNotFound = () => {
   return (
      <div className="admin-wrapper-error">       
            <h1 className="admin-error-title">404</h1>
            <h3 className="admin-error-text-warning">На жаль, сторінку не знайдено</h3>
            <p className="admin-error-text">Сторінка, яку ви  намагаєтесь знайти не існує, або була видалена</p>
            <Link to={"/admin"} className="admin-error-btn">
               Ви можете перейти на головну сторінку
            </Link>          
         </div>
   );
};