import { useState } from "react";
import arrowLeft from "../../assets/icon/arrow-left-icon.svg";
import arrowLeftFocused from "../../assets/icon/arrow-left-icon-focused.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const ForgetPassword = () => {
   const navigate = useNavigate();
   const [icon, setIcon] = useState(true);
   const [message, setMessage] = useState(null);
   const [clasMessage, setClassMessage] = useState('message');

   let userSchema = yup.object({
      email: yup.string().email("Введіть дійсний email").required("Введіть email"),
   });

   const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(userSchema) });

   function onSubmit(e) {
      fetch("https://dokoopy.onrender.com/api/auth/admin/forgot-password", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(e)
      }).then(res => res.json()).then(res => {
         if(res.message === 'User not found'){
            setMessage('Користувача з таким іменем не знайдено');
            setClassMessage('message messageNotFound');
         } else {
            setMessage('Лист з інструкціями направлено на введений email');
            setClassMessage('message messageSent');
         }
      })
      reset({ email: "" });
   }

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
               Введіть email, пов’язаний з вашим акаунтом. 
               </p>
               <p className="login-text">
               Якщо у вас є акаунт, вам на email буде
               надіслано посилання для відновлення пароля.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <label className={errors.email ? "login-input mail errorText" : "login-input mail"}>
               Email*
               <input
                  {...register("email")}
                  type="text"
                  placeholder={errors.email ? errors.email?.message : "name@company.com"}
               />
            </label>
            <p className={clasMessage}>{message}</p>
               <button type="submit">Надіслати</button>
            </form>
         </div>
      </div>
   );
};
