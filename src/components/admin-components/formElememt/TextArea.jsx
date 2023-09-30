export const TextArea = ({ setLgInput, label, placeholder, value }) => {
   return (
      <div className="text-area-blok">
         <p className="input-liable">{label}</p>
         <textarea
            value={value}
            rows="1"
            className={"lg-input"}
            cols="10"
            placeholder={placeholder}
            onChange={e => setLgInput(e.target.value)}
         ></textarea>
         <p className="counter-input">{`${value.length}/300`}</p>
      </div>
   );
};
