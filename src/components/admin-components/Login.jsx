import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { LoginEyeOpened } from "../../assets/admin-icons/login-eye-opened";
import { LoginEyeClosed } from "../../assets/admin-icons/login-eye-closed";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AdminApi } from "../../api/api";

import { useAppContext } from "../provider-components/app-provider";

export const Login = () => {
   const [type, setType] = useState(true);
   const [typeName, setTypeName] = useState("password");

   const navigate = useNavigate();

   const { logIn } = useAppContext();

   function click(e) {
      console.log(e);
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
         .then(res => {
            localStorage.setItem("token", res.data);
            logIn(res.data);
            console.log(res);
         })
         .then(() => {
            navigate("/admin");
         })
         .catch(e => console.warn(e));
      reset({ email: "", password: "" });
   }

   return (
      <div className="login-content">
         <h2>Увійти в акаунт</h2>
         <p className="login-text">Введіть email і пароль від вашого акаунту</p>
         <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <label className="login-input mail">
               Email*
               <input
                  {...register("email")}
                  type="text"
                  placeholder="name@company.com"
               />
            </label>
            <p className="errorText">{errors.email?.message}</p>
            <label className="login-input pass">
               Пароль*
               <input
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
            <button type="submit">Увійти</button>
         </form>
         <Link to={"forget-password"} className="forget-password">
            Забули пароль?
         </Link>
      </div>
   );
};
