import checkMark from "../../assets/icon/check-mark.svg";
import { useNavigate } from "react-router-dom";

const SuccessfullRenew = () => {
   const navigate = useNavigate();
   return (
      <div className="login-content renew-content">
         <img className="check-mark" src={checkMark} />
         <h2 className="successfullH2">Пароль успішно змінено!</h2>
         <form className="login-form success-form">
            <button onClick={() => navigate("/login")}>Увійти в акаунт</button>
         </form>
      </div>
   );
};

export default SuccessfullRenew;
