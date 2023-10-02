import { useState } from "react";
import { FilesPicker } from "./formElement/FilesPicker";
import { InputSm } from "./formElement/InputSm";
import { TextArea } from "./formElement/TextArea";
export const AddForm = ({
   smPlaceholder,
   lgPlaceholder,
   lgLiable,
   smLiable,
   nameButton,
   submitClick = () => {},
   defaultInfo,
   hiddenInputENG = false,
}) => {
   const [inputName, setInputName] = useState(defaultInfo?.name || "");
   const [inputNameENG, setInputNameENG] = useState(defaultInfo?.nameENG || "");
   const [inputDescription, setInputDescription] = useState(defaultInfo?.description || "");
   const [inputDescriptionENG, setInputDescriptionENG] = useState(
      defaultInfo?.descriptionENG || ""
   );
   // const [lgInput, setLgInput] = useState(defaultInfo?.description || "");
   // const [lgInput, setLgInput] = useState(defaultInfo?.description || "");
   const [selectedFile, setSelectedFile] = useState(defaultInfo?.img && null);

   const submitClickEvent = e => {
      e.preventDefault();
      submitClick({
         inputName,
         inputNameENG,
         inputDescription,
         inputDescriptionENG,
         selectedFile,
      });
   };
   return (
      <div className="form-container">
         <form onSubmit={submitClickEvent} className="added-form">
            <div className="form-input-container">
               <div className="tablet-files-picker">
                  <FilesPicker
                     selectedFile={selectedFile}
                     setSelectedFile={setSelectedFile}
                     defaultInfo={defaultInfo}
                  />
               </div>
               <div className="language-liable">UA</div>
               <InputSm
                  placeholder={smPlaceholder}
                  value={inputName}
                  setSmInput={setInputName}
                  label={smLiable}
               />

               <TextArea
                  placeholder={lgPlaceholder}
                  setLgInput={setInputDescription}
                  label={lgLiable}
                  value={inputDescription}
               />

               <div className="desc-files-picker">
                  <FilesPicker
                     selectedFile={selectedFile}
                     setSelectedFile={setSelectedFile}
                     defaultInfo={defaultInfo}
                  />
               </div>
            </div>
            <div className="form-input-container">
               <div className="language-liable">ENG</div>

               {hiddenInputENG ? (
                  <div className="input-blok"> </div>
               ) : (
                  <InputSm
                     placeholder={smPlaceholder}
                     value={inputNameENG}
                     setSmInput={setInputNameENG}
                     label={smLiable}
                  />
               )}

               <TextArea
                  placeholder={lgPlaceholder}
                  setLgInput={setInputDescriptionENG}
                  label={lgLiable}
                  value={inputDescriptionENG}
               />

               <div className="form-button-blok">
                  <button className="admin-button">{nameButton}</button>
               </div>
            </div>
         </form>
      </div>
   );
};
