import { Controller } from "react-hook-form";

export const TextArea = ({ errors, name, control, counter, label, length }) => {
   return (
      <div className="text-area-blok">
         <p className="input-liable">{label}</p>

         <Controller
            name={name}
            control={control}
            render={({ field }) => (
               <textarea
                  {...field}
                  rows="1"
                  className={errors ? "lg-input error-input" : "lg-input"}
                  cols="10"
               ></textarea>
            )}
         />
         <p className="counter-input">{`${length}/${counter}`}</p>
         {!!errors && <p className="error-message">{errors.message}</p>}
      </div>
   );
};
