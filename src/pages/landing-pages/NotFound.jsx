import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <div className="wrapper-error">
         <div className="container">
            <div className="error-container">
               <h1 className="error-title">404</h1>
               <h3 className="error-text-warning">вибачте, такої сторінки не існує</h3>
               <p className="error-text">Сторінка може бути видалена або тимчасово недоступна</p>
               <Link to={"/"} className="error-btn">
                  на головну
               </Link>
            </div>
         </div>
      </div>
   );
};
export default NotFound;
