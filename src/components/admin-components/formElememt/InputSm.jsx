export const InputSm = ({ value, label, setSmInput, placeholder }) => {
   return (
      <div>
         <p className="input-liable">{label}</p>
         <input
            value={value}
            onChange={e => setSmInput(e.target.value)}
            placeholder={placeholder}
            className="sm-input"
         ></input>
      </div>
   );
};
