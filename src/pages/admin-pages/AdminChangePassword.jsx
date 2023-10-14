import { EditEyeOpened } from "../../assets/admin-icons/edit-password-eye-o";
import { EditEyeClosed } from "../../assets/admin-icons/edit-password-eye-c";
import { useState, useEffect } from "react";
import { AdminApi } from "../../api/api";
import { useLoadingData } from "../../hook/useLoadingData";


export const AdminChangePassword = () => {
   const [currentPassword, setCurrentPassword] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const [typeCurrentPassword, setTypeCurrentPassword] = useState("password");
   const [typeNewPassword, setTypeNewPassword] = useState("password");
   const [typeConfirmPassword, setTypeConfirmPassword] = useState("password");
   const [passwordMismatch, setPasswordMismatch] = useState(false);

   const [showErrorMessage, setShowErrorMessage] = useState(false);
   const [showErrorMessage2, setShowErrorMessage2] = useState(false);
   

   const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.changePasswordAdmin, true);
   



   if (error) {
      return (
         <div>
            <p>
               Error: {error.message}
               <br />
               Код помилки: {error.code}
               <br />
               URL-адреса: {error.url}
            </p>
         </div>
      );
   }


   useEffect(() => {
      if (showErrorMessage) {
         const timer = setTimeout(() => {
            setShowErrorMessage(false);
         }, 3000);

         return () => clearTimeout(timer);
      }
   }, [showErrorMessage]); 

   useEffect(() => {
      if (showErrorMessage2) {
         const timer = setTimeout(() => {
            setShowErrorMessage2(false);
         }, 3000);

         return () => clearTimeout(timer);
      }
   }, [showErrorMessage2]);

   function togglePasswordVisibility(passwordType) {
      if (passwordType === "current") {
         setTypeCurrentPassword(typeCurrentPassword === "password" ? "text" : "password");
      } else if (passwordType === "new") {
         setTypeNewPassword(typeNewPassword === "password" ? "text" : "password");
      } else if (passwordType === "confirm") {
         setTypeConfirmPassword(typeConfirmPassword === "password" ? "text" : "password");
      }
   }

   function editPassword(event) {

      if (currentPassword.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '') {
         setShowErrorMessage2(true);
         return;
         
      }

      if (newPassword === confirmPassword) {
         setPasswordMismatch(false);

         const body = {
            password: currentPassword,
            newPassword: newPassword,
         };
         console.log(body);
         eventLoading(body);

         setCurrentPassword("");
         setNewPassword("");
         setConfirmPassword("");
      } else {
         setPasswordMismatch(true);
         setShowErrorMessage(true);
         setNewPassword("");
         setConfirmPassword("");
      }
   }


   return (
      <div className="admin-change-password">
         <div className="header-admin-change-password">
            <h2>Зміна паролю</h2>
         </div>
         <div className="inputs-admin-change-password">
            <form onSubmit={editPassword} className="admin-change-form">
               <div className="all-input-change">
               <label className="this-admin-change-password">
                  <p>Поточний пароль*</p>
                  <div className="this-admin-change-password-input">
                  <input type={typeCurrentPassword} 
                  placeholder="************"/>
                  {!currentPassword ? (
                     <EditEyeClosed onClick={() => togglePasswordVisibility("current")} />
                  ) : (
                     <EditEyeOpened onClick={() => togglePasswordVisibility("current")} />
                  )}
                  </div>
               </label>
               <label className="new-admin-change-password">
                  <p>Новий пароль*</p>
                  <div className="new-admin-change-password-input">
                  <input
                     type={typeNewPassword}
                     value={newPassword}
                     onChange={(e) => {
                        setNewPassword(e.target.value);
                        setPasswordMismatch(false); 
                     }}
                     placeholder="************"
                  />
                  {!newPassword ? (
                     <EditEyeClosed onClick={() => togglePasswordVisibility("new")} />
                  ) : (
                     <EditEyeOpened onClick={() => togglePasswordVisibility("new")} />
                  )}</div>
               </label>
               <label className="return-admin-change-password">
                  <p>Повторити новий пароль*</p>
                  <div className="return-admin-change-password-input">
                  <input
                     type={typeConfirmPassword}
                     value={confirmPassword}
                     onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setPasswordMismatch(false); 
                     }}
                     placeholder="************"
                  />
                  {!confirmPassword ? (
                     <EditEyeClosed onClick={() => togglePasswordVisibility("confirm")} />
                  ) : (
                     <EditEyeOpened onClick={() => togglePasswordVisibility("confirm")} />
                  )}
                  </div>
                  {showErrorMessage && (
                     <p style={{ color: 'red' }}>Нові паролі не співпадають</p>
                  )}
                  {showErrorMessage2 && (
                     <p style={{ color: 'red' }}>Незаповнене поле</p>
                     
                  )}

               </label>
               </div>
               <button className="edit-password-btn" type="submit">Змінити пароль</button>
            </form>
         </div>
      </div>
   );
};