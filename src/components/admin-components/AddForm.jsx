import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FilesPicker } from "./formElement/FilesPicker";
import { TextArea } from "./formElement/TextArea";
import { InputForm } from "./formElement/inputForm";
export const AddForm = ({
   isEdit,
   lgLiable,
   smLiable,
   nameButton,
   submitClick = () => {},
   defaultInfo,
   hiddenInputENG = false,
   counter,
   schema,
}) => {
   const [selectedFile, setSelectedFile] = useState(() => null);

   useEffect(() => {
      if (defaultInfo) {
         setSelectedFile(defaultInfo.imageURL);
      }
   }, [defaultInfo]);
   const userSchema = yup.object(schema);
   const {
      control,
      reset,
      watch,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: "onBlur",
      defaultValues: {
         title: defaultInfo?.title || "",
         titleEN: defaultInfo?.title_eng || "",
         description: defaultInfo?.description || "",
         descriptionEN: defaultInfo?.description_eng || "",
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
   console.log(errors.title);
   return (
      <div className="form-container">
         <form onSubmit={handleSubmit(submitClickEvent)} className="added-form">
            <div className="form-input-container">
               <div className="tablet-files-picker">
                  <FilesPicker
                     selectedFile={selectedFile}
                     setSelectedFile={setSelectedFile}
                     defaultInfo={defaultInfo}
                     isEdit={isEdit}
                  />
               </div>
               <div className="language-liable">UA</div>
               <InputForm errors={errors.title} control={control} name={"title"} label={smLiable} />

               <TextArea
                  errors={errors.description}
                  control={control}
                  name={"description"}
                  counter={counter}
                  label={lgLiable}
                  length={watch().description.length}
               />
               <div className="desc-files-picker">
                  <FilesPicker
                     selectedFile={selectedFile}
                     setSelectedFile={setSelectedFile}
                     defaultInfo={defaultInfo}
                     isEdit={isEdit}
                  />
               </div>
            </div>
            <div className="form-input-container">
               <div className="language-liable">ENG</div>
               {hiddenInputENG ? (
                  <>
                     <div className="input-blok"></div>
                     {!!errors.title && <div className="input-blok-err"></div>}
                  </>
               ) : (
                  <InputForm
                     errors={errors.titleEN}
                     control={control}
                     name={"titleEN"}
                     label={smLiable}
                  />
               )}

               <TextArea
                  errors={errors.descriptionEN}
                  control={control}
                  name={"descriptionEN"}
                  counter={counter}
                  label={lgLiable}
                  length={watch().descriptionEN.length}
               />

               <div className="form-button-blok">
                  <button className="admin-button">{nameButton}</button>
               </div>
            </div>
         </form>
      </div>
   );
};
