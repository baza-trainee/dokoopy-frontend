import { EditEyeOpened } from "../../assets/admin-icons/edit-password-eye-o";
import { EditEyeClosed } from "../../assets/admin-icons/edit-password-eye-c";
import { useState, useEffect } from "react";
import { AdminApi } from "../../api/api";
import { AdminModalSuccessful } from "../../components/admin-components/AdminModalSuccessful";

const AdminChangePassword = () => {
   const [currentPassword, setCurrentPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [typeCurrentPassword, setTypeCurrentPassword] = useState("password");
   const [typeNewPassword, setTypeNewPassword] = useState("password");
   const [typeConfirmPassword, setTypeConfirmPassword] = useState("password");
   const [passwordMismatch, setPasswordMismatch] = useState(false);
   const [showErrorMessage, setShowErrorMessage] = useState(false);
   const [showErrorMessage2, setShowErrorMessage2] = useState(false);
   const [showErrorMessage3, setShowErrorMessage3] = useState(false);
   const [showErrorMessage4, setShowErrorMessage4] = useState(false);
   const [showErrorMessage9, setShowErrorMessage9] = useState(false);
   const [showErrorMessage10, setShowErrorMessage10] = useState(false);
   const [isVisibleCurrentPassword, setIsVisibleCurrentPassword] = useState(false);
   const [isVisibleNewPassword, setIsVisibleNewPassword] = useState(false);
   const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false);
   const [isModalTrue, setIsModalTrue] = useState(false);
   const openModal = () => {
      setIsModalTrue(true);
      console.log("Modal opened, isModalOpen: true");
   };
   const closeModal = () => {
      setIsModalTrue(false);
      console.log("Modal closed, isModalOpen: false");
   };
   const [newInputStyles, setNewInputStyles] = useState({
      border: "1px solid var(--inputs_color, #ACACAC)",
   });
   const [confirmInputStyles, setConfirmInputStyles] = useState({
      border: "1px solid var(--inputs_color, #ACACAC)",
   });
   const [currentInputStyles, setCurrentInputStyles] = useState({
      border: "1px solid var(--inputs_color, #ACACAC)",
   });

   const handleChange = event => {
      setCurrentPassword(event.target.value);
   };

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

    useEffect(() => {
      if (showErrorMessage) {
         setNewInputStyles({
            border: "1px solid red",
         });
         setConfirmInputStyles({
            border: "1px solid red",
         });
         const timer = setTimeout(() => {
            setShowErrorMessage(false);
            setNewInputStyles({
               border: "1px solid var(--inputs_color, #ACACAC)",
            });
            setConfirmInputStyles({
               border: "1px solid var(--inputs_color, #ACACAC)",
            });
            setShowErrorMessage(false);
         }, 7000);

         return () => clearTimeout(timer);
      }
   }, [showErrorMessage]);

   useEffect(() => {
      const inputStyles = {
        current: {
          border: '1px solid var(--inputs_color, #ACACAC)',
        },
      };
    
      if (showErrorMessage2) {
        if (currentPassword.trim() === '') {
          inputStyles.current = {
            border: '1px solid red',
          };
        } else {
          // Якщо поле заповнене, сховати повідомлення про помилку
          setShowErrorMessage2(false);
          inputStyles.current = {
            border: '1px solid var(--inputs_color, #ACACAC)',
          }
        }setCurrentInputStyles(inputStyles.current);
      } 
    }, [showErrorMessage2, currentPassword]); 

    useEffect(() => {
      const inputStyles = {
        new: {
          border: '1px solid var(--inputs_color, #ACACAC)',
        },
      };
    
      if (showErrorMessage9) {
        if (newPassword.trim() === '') {
          inputStyles.new = {
            border: '1px solid red',
          };
        } else {
          // Якщо поле заповнене, сховати повідомлення про помилку
          setShowErrorMessage9(false);
          inputStyles.new = {
            border: '1px solid var(--inputs_color, #ACACAC)',
          }
        }
        setNewInputStyles(inputStyles.new);
      } 
    }, [showErrorMessage9, newPassword]);
     
    useEffect(() => {
      const inputStyles = {
        confirm: { border: '1px solid var(--inputs_color, #ACACAC)' },
      };
    
      if (showErrorMessage10) {
        if (confirmPassword.trim() === '') {
          inputStyles.confirm = { border: '1px solid red' };
        } else {
          // Якщо поле заповнене, сховати повідомлення про помилку
          setShowErrorMessage10(false);
          inputStyles.confirm = { border: '1px solid var(--inputs_color, #ACACAC)' };
        }
        setConfirmInputStyles(inputStyles.confirm);
      }
    }, [showErrorMessage10, confirmPassword]);

   useEffect(() => {
      if (showErrorMessage3) {
         setCurrentInputStyles({
            border: "1px solid red",
         });
         const timer = setTimeout(() => {
            setShowErrorMessage3(false);
            setCurrentInputStyles({
               border: "1px solid var(--inputs_color, #ACACAC)",
            });
         }, 7000);

         return () => clearTimeout(timer);
      }
   }, [showErrorMessage3]);

   useEffect(() => {
      if (showErrorMessage4) {
         setNewInputStyles({
            border: "1px solid red",
         });
         const timer = setTimeout(() => {
            setShowErrorMessage4(false);
            setNewInputStyles({
               border: "1px solid var(--inputs_color, #ACACAC)",
            });
         }, 10000);

         return () => clearTimeout(timer);
      }
   }, [showErrorMessage4]);

   function editPassword(event) {
      event.preventDefault();

if (currentPassword.trim() === '') {
   setShowErrorMessage2(true);
}

if (confirmPassword.trim() === '') {
   setShowErrorMessage10(true);
}
if (newPassword.trim() === '') {
   setShowErrorMessage9(true);
}
      // Перевірка, чи новий пароль має довжину не менше 6 символів
    else if (newPassword.length < 6 || /[А-ЯЁ]/i.test(newPassword) || !/[A-Z]/.test(newPassword) || newPassword === newPassword.toUpperCase() || /\s/.test(newPassword)) {
         setShowErrorMessage4(true);
         return;
      }

      // Перевірка, чи паролі збігаються новий з підтвердженням
    else if (newPassword === confirmPassword) {
         setPasswordMismatch(false);
         const body = {
            password: currentPassword, //зберігає введені дані
            newPassword: newPassword,
         };
         AdminApi.changePasswordAdmin(body)
            .then(() => {
               setCurrentPassword("");
               setNewPassword("");
               setConfirmPassword("");
               openModal();
               setIsModalTrue(true);
            })
            .catch(error => {
               setShowErrorMessage3(true);
            });
      } else {
         setPasswordMismatch(true);
         setShowErrorMessage(true);
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
                     <div className="this-admin-change-password-input" style={currentInputStyles}>
                        <input
                           type={typeCurrentPassword}
                           value={currentPassword}
                           onChange={handleChange}
                           placeholder="************"
                        />
                        {isVisibleCurrentPassword ? (
                           <EditEyeClosed onClick={() => toggleVisibility("current")} />
                        ) : (
                           <EditEyeOpened onClick={() => toggleVisibility("current")} />
                        )}

                  </div>
               {showErrorMessage3 && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Поточний пароль невірний</p>
                  )}
               {showErrorMessage2 && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Незаповнене поле</p>
                  )}

                  </label>
                  <label className="new-admin-change-password">
                     <p>Новий пароль*</p>
                     <div className="new-admin-change-password-input" style={newInputStyles}>
                        <input
                           type={typeNewPassword}
                           value={newPassword}
                           onChange={e => {
                              setNewPassword(e.target.value);
                              setPasswordMismatch(false);
                           }}
                           placeholder="************"
                        />
                        {isVisibleNewPassword ? (
                           <EditEyeClosed onClick={() => toggleVisibility("new")} />
                        ) : (
                           <EditEyeOpened onClick={() => toggleVisibility("new")} />
                        )}
                     </div>
                   {showErrorMessage4 && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Пароль має містити мінімум 6 символів, латинські літери верхнього та нижнього регістру, без пробілів (може містити цифри та спецсимволи)</p>
                  )} 
                    {showErrorMessage9 && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Незаповнене поле</p>
                  )}
               </label>
               <label className="return-admin-change-password">
                  <p>Повторити новий пароль*</p>
                  <div className="return-admin-change-password-input" style={confirmInputStyles}>
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
                     <EditEyeClosed onClick={() => toggleVisibility("confirm")} />

                        ) : (
                           <EditEyeOpened onClick={() => toggleVisibility("confirm")} />
                        )}

                  </div>
                  {showErrorMessage && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Нові паролі не співпадають</p>
                  )}
                  {showErrorMessage10 && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Незаповнене поле</p>
                  )}
               </label>

               </div>
               <button className="edit-password-btn" type="submit">
                  Змінити пароль
               </button>

               
            </form>
         </div>
         <AdminModalSuccessful isModalTrue={isModalTrue} closeModal={closeModal} />
      </div>
   );
};

export default AdminChangePassword;
