import { useState } from "react";
import arrowLeft from "../../assets/icon/arrow-left-icon.svg";
import arrowLeftFocused from "../../assets/icon/arrow-left-icon-focused.svg";
import { useNavigate } from "react-router-dom";

export const ForgetPassword = () => {
   const navigate = useNavigate();
   const [icon, setIcon] = useState(true);

   return (
      <div className="forget-content">
         <button className="return-to-login" onClick={() => navigate(-1)}>
            <img
               onMouseEnter={() => setIcon(false)}
               onMouseLeave={() => setIcon(true)}
               src={icon ? arrowLeft : arrowLeftFocused}
            />
         </button>
         <div className="login-content forget-h2">
            <h2>Відновлення пароля</h2>
            <p className="login-text">
               Введіть email, пов’язаний з вашим акаунтом Якщо у вас є акаунт, вам на email буде
               надіслано посилання для відновлення пароля{" "}
            </p>
            <form className="login-form">
               <input
                  className="login-input renew-input"
                  type="text"
                  placeholder="name@company.com"
               />
               <button type="submit">Надіслати</button>
            </form>
         </div>
      </div>
   );
};
