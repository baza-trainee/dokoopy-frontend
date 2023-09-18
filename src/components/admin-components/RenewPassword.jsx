export const RenewPassword = () => {
   const navigate = useNavigate();

   return (
      <div className="renew-content">
         <div className="login-content forget-h2">
            <h2>Завершення відновлення пароля</h2>
            <form className="login-form">
               <p className="login-text renew-text">Новий пароль</p>
               <input
                  className="login-input renew-input"
                  type="password"
                  placeholder="Введіть новий пароль"
               />
               <p className="login-text renew-text">Повторіть новий пароль</p>
               <input
                  className="login-input renew-input"
                  type="password"
                  placeholder="Повторіть новий пароль"
               />
               <button type="submit">Змінити пароль</button>
            </form>
         </div>
      </div>
   );
};
