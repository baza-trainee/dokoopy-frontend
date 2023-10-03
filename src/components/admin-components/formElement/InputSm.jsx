export const InputSm = ({ value, label, setSmInput, placeholder, isLink = false }) => {
   return (
      <div>
         <p className="input-liable">{label}</p>
         <input
            value={value}
            type="text"
            onChange={e => setSmInput(e.target.value)}
            placeholder={placeholder}
            className={isLink ? "input-link sm-input" : "sm-input"}
         ></input>
      </div>
   );
};
