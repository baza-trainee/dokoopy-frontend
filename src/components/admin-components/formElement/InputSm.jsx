export const InputSm = ({ value, label, setSmInput, placeholder, isLink = false, isEmptyInput, onChange, error }) => {
   const inputClassName = isLink ? "input-link sm-input" : "sm-input";
   const commmonClassName = isEmptyInput ? `${inputClassName} empty-input` : inputClassName;
   return (
      <div>
         <p className="input-liable">{label}</p>
         <input
            value={value || ""}
            type="text"
            // onChange={e => setSmInput(e.target.value)}
            placeholder={placeholder}
            className={commmonClassName}
            // className={isLink ? "input-link sm-input" : "sm-input"}
            onChange={onChange}
         ></input>
          {isEmptyInput && <p className="error-message">{"Поле обов'язкове для заповнення"}</p>}
      </div>
   );
};
