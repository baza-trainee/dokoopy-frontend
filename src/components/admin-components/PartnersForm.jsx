import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FilesPicker } from "./formElement/FilesPicker";
import { InputForm } from "./formElement/inputForm";
export const PartnersForm = ({
   lgLiable,
   smLiable,
   nameButton,
   submitClick,
   defaultInfo,
   schema,
}) => {
   const [selectedFile, setSelectedFile] = useState(() => null);
   const [error, setError] = useState(null);
   useEffect(() => {
      if (defaultInfo) {
         setSelectedFile(defaultInfo.imageURL);
      }
   }, [defaultInfo]);
   const userSchema = yup.object(schema);
   const {
      control,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: "onBlur",
      defaultValues: {
         title: defaultInfo?.title || "",
         link: defaultInfo?.link || "",
      },
      resolver: yupResolver(userSchema),
   });
   const submitClickEvent = e => {
      if (selectedFile) {
         submitClick({ e, selectedFile });
         setSelectedFile(null);
         reset();
      }
   };
   const handlerSubmitButton = () => {
      if (!selectedFile) {
         setError("Поле обов'язкове для заповнення");
      }
   };

   return (
      <div className="form-container">
         <form onSubmit={handleSubmit(submitClickEvent)} className="added-form">
            <div className="partner-file-blok">
               <FilesPicker
                  errors={error}
                  setError={setError}
                  selectedFile={selectedFile}
                  setSelectedFile={setSelectedFile}
                  defaultInfo={defaultInfo}
               />
            </div>
            <div className="form-input-container">
               <InputForm errors={errors.title} control={control} name={"title"} label={smLiable} />

               <InputForm
                  errors={errors.link}
                  control={control}
                  name={"link"}
                  label={lgLiable}
                  isLink={true}
               />
               <div className="form-button-blok">
                  <button onClick={handlerSubmitButton} type="submit" className="admin-button">
                     {nameButton}
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};
