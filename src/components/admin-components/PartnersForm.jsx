import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { ButtonSubmit } from "./formElement/ButtonSubmit";
import { FilesPicker } from "./formElement/FilesPicker";
import { InputForm } from "./formElement/inputForm";
export const PartnersForm = ({
   lgLiable,
   smLiable,
   nameButton,
   submitClick,
   defaultInfo,
   schema,
   success,
}) => {
   const [selectedFile, setSelectedFile] = useState(() => null);
   const [isLoading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const navigation = useNavigate();
   useEffect(() => {
      if (defaultInfo) {
         setSelectedFile(defaultInfo.imageURL);
      }
   }, [defaultInfo]);
   useEffect(() => {
      if (success) {
         navigation(-1);
      }
   }, [success]);
   const userSchema = yup.object(schema);
   const {
      control,
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
         setLoading(true);
         submitClick({ e, selectedFile });
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
                  <ButtonSubmit
                     nameButton={nameButton}
                     isLoading={isLoading}
                     handlerSubmitButton={handlerSubmitButton}
                  />
               </div>
            </div>
         </form>
      </div>
   );
};
