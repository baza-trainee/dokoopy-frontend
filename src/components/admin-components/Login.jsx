import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginEyeOpened } from "../../assets/admin-icons/login-eye-opened";
import { LoginEyeClosed } from "../../assets/admin-icons/login-eye-closed";

export const Login = () => {
   const [type, setType] = useState(true);
   const [typeName, setTypeName] = useState("password");
   function click() {
      setType(!type);
      if (type) {
         setTypeName("text");
      } else {
         setTypeName("password");
      }
   }
   return (
      <div className="login-content">
         <h2>Увійти в акаунт</h2>
         <p className="login-text">Введіть email і створіть пароль від вашого акаунту</p>
         <form className="login-form">
            <input className="login-input mail" type="text" placeholder="name@company.com" />
            <input className="login-input pass" type={typeName} placeholder="************" />
            {!type ? (
               <LoginEyeClosed onClick={() => click()} />
            ) : (
               <LoginEyeOpened onClick={() => click()} />
            )}
            <button type="submit">Увійти</button>
         </form>
         <Link to={"forget_password"} className="forget-password">
            Забули пароль?
         </Link>
      </div>
   );
};
