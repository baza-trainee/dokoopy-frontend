import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginEyeOpened } from "../../assets/admin-icons/login-eye-opened";
import { LoginEyeClosed } from "../../assets/admin-icons/login-eye-closed";
import arrowLeft from "../../assets/icon/arrow-left-icon.svg";
import arrowLeftFocused from "../../assets/icon/arrow-left-icon-focused.svg";

export const RenewPassword = () => {
   const navigate = useNavigate();
   const [type, setType] = useState(true);
   const [typeName, setTypeName] = useState("password");
   const [icon, setIcon] = useState(true);
   const token = window.location.href.split("/")[window.location.href.split("/").length - 1];
   const id = window.location.href.split("/")[window.location.href.split("/").length - 2];

   function click() {
      setType(!type);
      if (type) {
         setTypeName("text");
      } else {
         setTypeName("password");
      }
   }
   let reg = /^\S+$/;
   let userSchema = yup.object({
      password: yup
         .string()
         .required("Введіть пароль")
         .min(6, "Введіть пароль довжиною не менше 6 символів")
         .matches(reg, "Пароль не має містити пробілів"),
      confirmPassword: yup
         .string()
         .required("Введіть пароль")
         .oneOf([yup.ref("password")], "Паролі не співпадають"),
   });

   const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(userSchema) });

   function onSubmit(e) {
      fetch(`https://dokoopy.onrender.com/api/auth/admin/reset-password/${id}/${token}`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ password: e.password }),
      })
         .then(res => {
            console.log(res);
            if (res.ok) {
               navigate("/login/successful-renew");
            }
         })
         .catch(e => console.log(e));
      reset({ password: "", confirmPassword: "" });
   }

   return (
      <div className="renew-content">
         <button className="return-to-login">
            <Link to={"/login"}>
               <img
                  onMouseEnter={() => setIcon(false)}
                  onMouseLeave={() => setIcon(true)}
                  src={icon ? arrowLeft : arrowLeftFocused}
               />
            </Link>
         </button>
         <div className="login-content forget-h2">
            <div className="renewHeader">
               <h2>Завершення відновлення пароля</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
               <label className="login-input pass">
                  Новий пароль*
                  <input
                     style={
                        errors.password
                           ? { backgroundColor: "#FDE4E4" }
                           : { backgroundColor: "#FFFFFF" }
                     }
                     {...register("password")}
                     type={typeName}
                     placeholder="************"
                  />
                  {!type ? (
                     <LoginEyeClosed onClick={() => click()} />
                  ) : (
                     <LoginEyeOpened onClick={() => click()} />
                  )}
               </label>
               <p className="errorText">{errors.password?.message}</p>
               <label className="login-input pass">
                  Повторити новий пароль*
                  <input
                     style={
                        errors.confirmPassword
                           ? { backgroundColor: "#FDE4E4" }
                           : { backgroundColor: "#FFFFFF" }
                     }
                     {...register("confirmPassword")}
                     type={typeName}
                     placeholder="************"
                  />
                  {!type ? (
                     <LoginEyeClosed onClick={() => click()} />
                  ) : (
                     <LoginEyeOpened onClick={() => click()} />
                  )}
               </label>
               <p className="errorText">{errors.confirmPassword?.message}</p>
               <button type="submit">Змінити пароль</button>
            </form>
         </div>
      </div>
   );
};
