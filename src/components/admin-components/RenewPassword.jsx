import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginEyeOpened } from "../../assets/admin-icons/login-eye-opened";
import { LoginEyeClosed } from "../../assets/admin-icons/login-eye-closed";

export const RenewPassword = () => {
   const navigate = useNavigate();
   const [type, setType] = useState(true);
   const [typeName, setTypeName] = useState("password");
   const token = window.location.href.split("/")[window.location.href.split("/").length - 1];

   function click() {
      setType(!type);
      if (type) {
         setTypeName("text");
      } else {
         setTypeName("password");
      }
   }

   let userSchema = yup.object({
      password: yup.string().required("Введіть пароль"),
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
      fetch(`https://dokoopy-pr-29.onrender.com/api/auth/admin/reset-password/${token}`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ password: e.password }),
      }).then(res => {
         if (res.ok) {
            navigate("/login/successful-renew");
         }
      });
      reset({ password: "", confirmPassword: "" });
   }

   return (
      <div className="renew-content">
         <div className="login-content forget-h2">
            <h2>Завершення відновлення пароля</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
               <label
                  className={errors.password ? "login-input pass errorText" : "login-input pass"}
               >
                  Новий пароль*
                  <input
                     {...register("password")}
                     type={typeName}
                     placeholder={errors.password ? errors.password?.message : "************"}
                  />
                  {!type ? (
                     <LoginEyeClosed onClick={() => click()} />
                  ) : (
                     <LoginEyeOpened onClick={() => click()} />
                  )}
               </label>
               <label
                  className={
                     errors.confirmPassword ? "login-input pass errorText" : "login-input pass"
                  }
               >
                  Повторити новий пароль*
                  <input
                     {...register("confirmPassword")}
                     type={typeName}
                     placeholder={
                        errors.confirmPassword ? errors.confirmPassword?.message : "************"
                     }
                  />
                  {!type ? (
                     <LoginEyeClosed onClick={() => click()} />
                  ) : (
                     <LoginEyeOpened onClick={() => click()} />
                  )}
               </label>
               <button type="submit">Змінити пароль</button>
            </form>
         </div>
      </div>
   );
};
