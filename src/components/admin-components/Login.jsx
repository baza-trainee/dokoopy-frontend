import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { LoginEyeClosed } from "../../assets/admin-icons/login-eye-closed";
import { LoginEyeOpened } from "../../assets/admin-icons/login-eye-opened";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AdminApi } from "../../api/api";

import { useAppContext } from "../provider-components/app-provider";

export const Login = () => {
   const [type, setType] = useState(true);
   const [typeName, setTypeName] = useState("password");
   const [message, setMessage] = useState(null);

   const navigate = useNavigate();

   const { logIn } = useAppContext();

   function click(e) {
      setType(!type);
      if (type) {
         setTypeName("text");
      } else {
         setTypeName("password");
      }
   }
   const mailRegx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   let userSchema = yup.object({
      email: yup.string().required("Введіть email").matches(mailRegx, "Введіть дійсний email"),
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
            localStorage.setItem("token", res.data.token);
            // AdminApi.setToken(res.data.token);
            logIn(res.data.token);
         })
         .then(() => {
            navigate("/admin");
         })
         .catch(e => {
            if (e.response.data.message === "Email or password is wrong") {
               setMessage("Неправильний email або пароль");
            }
         });
      reset({ email: "", password: "" });
   }

   return (
      <div className="login-content">
         <div>
            <h2>Увійти в акаунт</h2>
         </div>
         <p className="login-text">Введіть email і пароль від вашого акаунту</p>
         <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <label className="login-input mail">
               Email*
               <input
                  style={
                     errors.email ? { backgroundColor: "#FDE4E4" } : { backgroundColor: "#FFFFFF" }
                  }
                  {...register("email")}
                  type="text"
                  placeholder="name@company.com"
               />
            </label>
            <p className="errorText">{errors.email?.message}</p>
            <label className="login-input pass">
               Пароль*
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
            <p className="message messageNotFound">{message}</p>
            <button type="submit">Увійти</button>
         </form>
         <div className="forgetContainer">
            <Link to={"forget-password"} className="forget-password">
               Забули пароль?
            </Link>
         </div>
      </div>
   );
};
