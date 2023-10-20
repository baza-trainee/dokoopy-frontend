import { EditEyeOpened } from "../../assets/admin-icons/edit-password-eye-o";
import { EditEyeClosed } from "../../assets/admin-icons/edit-password-eye-c";
import { useState, useEffect } from "react";
import { AdminApi } from "../../api/api";
import { AdminModalSuccessful } from "../../components/admin-components/AdminModalSuccessful";

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
   const [showErrorMessage3, setShowErrorMessage3] = useState(false);
   const [showErrorMessage4, setShowErrorMessage4] = useState(false);
   const [showErrorMessage5, setShowErrorMessage5] = useState(false);
   const [showErrorMessage6, setShowErrorMessage6] = useState(false);
   const [showErrorMessage7, setShowErrorMessage7] = useState(false);
   const [showErrorMessage8, setShowErrorMessage8] = useState(false);
   const [isVisibleCurrentPassword, setIsVisibleCurrentPassword] = useState(false);
   const [isVisibleNewPassword, setIsVisibleNewPassword] = useState(false);
   const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false);
   const [isModalTrue, setIsModalTrue] = useState(false);
   const [newInputStyles, setNewInputStyles] = useState({
      border: '1px solid var(--inputs_color, #ACACAC)',
    });
    const [confirmInputStyles, setConfirmInputStyles] = useState({
      border: '1px solid var(--inputs_color, #ACACAC)',
      });
    const [currentInputStyles, setCurrentInputStyles] = useState({
      border: '1px solid var(--inputs_color, #ACACAC)',
    });
   
   const handleChange = (event) => {
         setCurrentPassword(event.target.value);
    };

    useEffect(() => {
      if (showErrorMessage) {
        setNewInputStyles({
          border: '1px solid red',
        });
        setConfirmInputStyles({
          border: '1px solid red',
        });
        const timer = setTimeout(() => {
          setShowErrorMessage(false);
          setNewInputStyles({
            border: '1px solid var(--inputs_color, #ACACAC)',
          });
          setConfirmInputStyles({
            border: '1px solid var(--inputs_color, #ACACAC)',
          });
          setShowErrorMessage(false);
        }, 7000);
    
        return () => clearTimeout(timer);
      }
    }, [showErrorMessage]);

    useEffect(() => {
      if (showErrorMessage2) {
        const inputStyles = {
          current: { border: '1px solid var(--inputs_color, #ACACAC)' },
          new: { border: '1px solid var(--inputs_color, #ACACAC)' },
          confirm: { border: '1px solid var(--inputs_color, #ACACAC)' },
        };
    
        if (currentPassword.trim() === '') {
          inputStyles.current = { border: '1px solid red' };
        }
        if (newPassword.trim() === '') {
          inputStyles.new = { border: '1px solid red' };
        }
        if (confirmPassword.trim() === '') {
          inputStyles.confirm = { border: '1px solid red' };
        }
    
        setCurrentInputStyles(inputStyles.current);
        setNewInputStyles(inputStyles.new);
        setConfirmInputStyles(inputStyles.confirm);
    
        const timer = setTimeout(() => {
          setShowErrorMessage2(false);
          setCurrentInputStyles({ border: '1px solid var(--inputs_color, #ACACAC)' });
          setNewInputStyles({ border: '1px solid var(--inputs_color, #ACACAC)' });
          setConfirmInputStyles({ border: '1px solid var(--inputs_color, #ACACAC)' });
          setShowErrorMessage2(false);
        }, 7000);
    
        return () => clearTimeout(timer);
      }
    }, [showErrorMessage2, currentPassword, newPassword, confirmPassword]);

   useEffect(() => {
      if (showErrorMessage3) {
         setCurrentInputStyles({
            border: '1px solid red',
          });
         const timer = setTimeout(() => {
           setShowErrorMessage3(false);
           setCurrentInputStyles({
            border: '1px solid var(--inputs_color, #ACACAC)',
          });
           setShowErrorMessage4(false);
         }, 7000);

         return () => clearTimeout(timer);
      }
   }, [showErrorMessage3]); 

   useEffect(() => {
      if (showErrorMessage4) {
         setNewInputStyles({
            border: '1px solid red',
          });
         const timer = setTimeout(() => {
           setShowErrorMessage4(false);
           setNewInputStyles({
            border: '1px solid red',
          });
           setShowErrorMessage4(false);
         }, 7000);

         return () => clearTimeout(timer);
      }
         
   }, [showErrorMessage4]);

   useEffect(() => {
      if (showErrorMessage5) {
         setNewInputStyles({
            border: '1px solid red',
          });
         const timer = setTimeout(() => {
           setShowErrorMessage5(false);
           setNewInputStyles({
            border: '1px solid red',
          });
           setShowErrorMessage5(false);
         }, 7000);

         return () => clearTimeout(timer);
      }
         
   }, [showErrorMessage5]);

   useEffect(() => {
      if (showErrorMessage6) {
         setNewInputStyles({
            border: '1px solid red',
          });
         const timer = setTimeout(() => {
           setShowErrorMessage6(false);
           setNewInputStyles({
            border: '1px solid red',
          });
           setShowErrorMessage6(false);
         }, 7000);

         return () => clearTimeout(timer);
      }    
   }, [showErrorMessage6]);

   useEffect(() => {
    if (showErrorMessage7) {
       setNewInputStyles({
          border: '1px solid red',
        });
       const timer = setTimeout(() => {
         setShowErrorMessage7(false);
         setNewInputStyles({
          border: '1px solid red',
        });
         setShowErrorMessage7(false);
       }, 7000);

       return () => clearTimeout(timer);
    }     
 }, [showErrorMessage7]);

 useEffect(() => {
  if (showErrorMessage8) {
     setNewInputStyles({
        border: '1px solid red',
      });
     const timer = setTimeout(() => {
       setShowErrorMessage8(false);
       setNewInputStyles({
        border: '1px solid red',
      });
       setShowErrorMessage8(false);
     }, 7000);

     return () => clearTimeout(timer);
  }
}, [showErrorMessage8]);



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
      // Перевірка, чи заповнені поля
      if (currentPassword.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '') {
        setShowErrorMessage2(true);
        return;
      }
     
       // Перевірка, чи новий пароль має довжину не менше 6 символів
       if (newPassword.length < 6) {
         setShowErrorMessage4(true);
         return;
       }
     
      // Перевірка, чи пароль містить кирилицю
      if (/[А-ЯЁ]/i.test(newPassword)) {
          setShowErrorMessage7(true);
          return;

      }
      // Перевірка, чи пароль містить великі літери
      if (!/[A-Z]/.test(newPassword)) {
          setShowErrorMessage6(true);
          return;
      }
      // Перевірка, чи пароль містить все у верхньому регістрі
      if (newPassword === newPassword.toUpperCase()) {
        setShowErrorMessage8(true);
        return;
      }

       // Перевірка, чи пароль містить пробілі
       if (/\s/.test(newPassword)) {
         setShowErrorMessage5(true);
         return;
       }
     
     

    // Перевірка, чи паролі збігаються новий з підтвердженням
      if (newPassword === confirmPassword) {
        setPasswordMismatch(false);
        const body = {
          password: currentPassword, //зберігає введені дані
          newPassword: newPassword,
        };
        AdminApi.changePasswordAdmin(body).then(() => {     
         setCurrentPassword("");
         setNewPassword("");
         setConfirmPassword("");
         setIsModalTrue(true);
       }).catch((error) => {
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
               </label>
               <label className="new-admin-change-password">
                  <p>Новий пароль*</p>
                  <div className="new-admin-change-password-input" style={newInputStyles}>
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
                     <EditEyeClosed onClick={() => toggleVisibility("new")} />
                     ) : (
                        <EditEyeOpened onClick={() => toggleVisibility("new")} />
                     )}
               </div>
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
                  {showErrorMessage2 && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Незаповнене поле</p>
                  )}
                  {showErrorMessage3 && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Поточний пароль невірний</p>
                  )}
                  {showErrorMessage4 && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Введіть пароль довжиною не менше 6 символів</p>
                  )}
                   {showErrorMessage5 && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Пароль не має містити пробілів</p>
                  )}
                   {showErrorMessage6 && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Пароль має містити великі літери</p>
                  )}
                   {showErrorMessage7 && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Пароль не має містити кирилицю</p>
                  )}
                   {showErrorMessage8 && (
                     <p className="error-icon-message" style={{ color: 'red' }}>Пароль має містити хоча б одну маленьку літеру</p>
                  )}
               </label>
               </div>
               <button className="edit-password-btn" type="submit">Змінити пароль</button>
            </form>
         </div>
         {isModalTrue && (<AdminModalSuccessful/>)}
      </div>
   );
};