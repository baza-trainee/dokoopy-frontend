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
   
   const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
   const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

   const [isVisibleCurrentPassword, setIsVisibleCurrentPassword] = useState(false);
   const [isVisibleNewPassword, setIsVisibleNewPassword] = useState(false);
   const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false);

   const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.changePasswordAdmin, true);

   const handleChange = (event) => {
      setCurrentPassword(event.target.value);
    };

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


   const toggleVisibility = (passwordType) => {
      if (passwordType === "current") {
        setIsVisibleCurrentPassword(!isVisibleCurrentPassword);
        setTypeCurrentPassword(typeCurrentPassword === "password" ? "text" : "password");
      } else if (passwordType === "new") {
        setIsVisibleNewPassword(!isVisibleNewPassword);
        setTypeNewPassword(typeNewPassword === "password" ? "text" : "password");
      } else if (passwordType === "confirm") {
        setIsVisibleConfirmPassword(!isVisibleConfirmPassword);
        setTypeConfirmPassword(typeConfirmPassword === "password" ? "text" : "password");
      }
    };


   function editPassword(event) {
      event.preventDefault();

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
                  <input
                        type={typeCurrentPassword}
                        value={currentPassword}
                        onChange={handleChange}
                        placeholder="************"
                        />
                  {isVisibleCurrentPassword ? (
                        <EditEyeOpened onClick={() => toggleVisibility("current")} />
                        ) : (
                        <EditEyeClosed onClick={() => toggleVisibility("current")} />
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
                  {isVisibleNewPassword ? (
                     <EditEyeOpened onClick={() => toggleVisibility("new")} />
                     ) : (
                     <EditEyeClosed onClick={() => toggleVisibility("new")} />
                     )}
               </div>
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
                  {isVisibleConfirmPassword ? (
                        <EditEyeOpened onClick={() => toggleVisibility("confirm")} />
                        ) : (
                        <EditEyeClosed onClick={() => toggleVisibility("confirm")} />
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