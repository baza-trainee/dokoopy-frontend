import { Spinner } from "../Spinner";

export const ButtonSubmit = ({ handlerSubmitButton, nameButton, isLoading }) => {
   return (
      <button onClick={handlerSubmitButton} className="admin-button">
         {!isLoading ? `${nameButton}` : <Spinner size={30} color={"#ffffff"} />}
      </button>
   );
};
