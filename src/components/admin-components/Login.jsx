import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginEyeOpened } from "../../assets/admin-icons/login-eye-opened";
import { LoginEyeClosed } from "../../assets/admin-icons/login-eye-closed";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AdminApi } from "../../api/api";

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

   let userSchema = yup.object({
      email: yup.string().email("Введіть дійсний email").required("Введіть email"),
      password: yup.string().required("Введіть пароль"),
   });

   const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(userSchema) });

   function onSubmit(e) {
      AdminApi.loginAdmin(e)
         .then(res => localStorage.setItem('token', res.data))
         .catch(e => console.warn(e));
      reset({ email: "", password: "" });
   }

   return (
      <div className="login-content">
         <h2>Увійти в акаунт</h2>
         <p className="login-text">Введіть email і пароль від вашого акаунту</p>
         <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <label className={errors.email ? "login-input mail errorText" : "login-input mail"}>
               Email*
               <input
                  {...register("email")}
                  type="text"
                  placeholder={errors.email ? errors.email?.message : "name@company.com"}
               />
            </label>
            <label className={errors.password ? "login-input pass errorText" : "login-input pass"}>
               Пароль*
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
            <button type="submit">Увійти</button>
         </form>
         <Link to={"forget_password"} className="forget-password">
            Забули пароль?
         </Link>
      </div>
   );
};
