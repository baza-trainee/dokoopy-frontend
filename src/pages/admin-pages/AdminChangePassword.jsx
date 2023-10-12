import { EditEyeOpened } from "../../assets/admin-icons/edit-password-eye-o";
import { EditEyeClosed } from "../../assets/admin-icons/edit-password-eye-c";
import { useState, useEffect } from "react";
// import { AdminApi } from "../../api/api";

export const AdminChangePassword = () => {

   const divNew = document.querySelector(".new-admin-change-password-input");
   const divReturn = document.querySelector(".return-admin-change-password-input");

   const [currentPassword, setCurrentPassword] = useState(true);
   const [newPassword, setNewPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const [typeCurrentPassword, setTypeCurrentPassword] = useState("password");
   const [typeNewPassword, setTypeNewPassword] = useState("password");
   const [typeConfirmPassword, setTypeConfirmPassword] = useState("password");
   const [passwordMismatch, setPasswordMismatch] = useState(false);


   const [showErrorMessage, setShowErrorMessage] = useState(false);

   useEffect(() => {
      if (showErrorMessage) {

         const timer = setTimeout(() => {
            setShowErrorMessage(false);
            
         }, 3000);


         return () => clearTimeout(timer);
      }
   }, [showErrorMessage]);

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
      event.preventDefault();

      if (newPassword === confirmPassword) {
         setPasswordMismatch(false);
         divNew.style.bacground = "";
         divNew.style.border = "";
         divReturn.style.bacground = "";
         divReturn.style.border = "";
         // Додатковий код для зміни паролю на сервері
         // AdminApi.resetPasswordAdmin(resetToken, { newPassword })
         //    .then(response => {
         //       console.log("Пароль змінено успішно");
         //    })
         //    .catch(error => {
         //       console.error("Помилка при зміні паролю", error);
         //    });
      } else {
         setPasswordMismatch(true);
         setShowErrorMessage(true); 
         setNewPassword("");
         setConfirmPassword("");
         divNew.style.backgroundColor = "rgba(245, 19, 19, 0.4)";
         divNew.style.border = "1px solid red";
         divReturn.style.backgroundColor = "rgba(245, 19, 19, 0.4)";
         divReturn.style.border = "1px solid red";
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
                     <p style={{ color: 'red' }}>Паролі не співпадають</p>
                  )}

               </label>
               </div>
               <button className="edit-password-btn" type="submit">Змінити пароль</button>
            </form>
         </div>
      </div>
   );
};