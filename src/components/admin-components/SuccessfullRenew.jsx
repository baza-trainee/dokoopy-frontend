import checkMark from "../../assets/icon/check-mark.svg";
import { useNavigate } from "react-router-dom";

export const SuccessfullRenew = () => {
   const navigate = useNavigate();
   return (
      <div className="login-content">
         <div className="check-mark">
            <img src={checkMark} />
         </div>
         <h2>Пароль успішно змінено!</h2>
         <form className="login-form success-form">
            <button onClick={() => navigate("/login")}>Увійти в акаунт</button>
         </form>
      </div>
   );
};
