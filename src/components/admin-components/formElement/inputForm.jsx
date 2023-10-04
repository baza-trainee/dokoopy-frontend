import { Controller } from "react-hook-form";

export const InputForm = ({ errors, name, control, label, isLink }) => {
   return (
      <div>
         <p className="input-liable">{label}</p>
         <Controller
            name={name}
            control={control}
            render={({ field }) => (
               <input
                  {...field}
                  type="text"
                  className={
                     isLink
                        ? "input-link sm-input"
                        : "sm-input" && errors
                        ? "sm-input error-input"
                        : "sm-input"
                  }
               ></input>
            )}
         />
         {!!errors && <p className="error-message">{errors.message}</p>}
      </div>
   );
};
