import { useState } from "react";
import { FilesPicker } from "./formElememt/FilesPicker";
import { InputSm } from "./formElememt/InputSm";
import { TextArea } from "./formElememt/TextArea";
export const AddForm = ({
   smPlaceholder,
   lgPlaceholder,
   lgLiable,
   smLiable,
   textArea = true,
   nameButton,
   submitClick = () => {},
   defaultInfo,
}) => {
   const [smInput, setSmInput] = useState(defaultInfo?.name || "");
   const [lgInput, setLgInput] = useState(defaultInfo?.link || "");
   const [selectedFile, setSelectedFile] = useState(defaultInfo?.img && null);

   const submitClickEvent = e => {
      e.preventDefault();
      submitClick({
         smInput,
         lgInput,
         selectedFile,
      });
   };
   return (
      <div className="form-container">
         <form onSubmit={submitClickEvent} className="added-form">
            <FilesPicker
               selectedFile={selectedFile}
               setSelectedFile={setSelectedFile}
               defaultInfo={defaultInfo}
            />
            <div className="right-input-blok">
               <InputSm
                  placeholder={smPlaceholder}
                  value={smInput}
                  setSmInput={setSmInput}
                  label={smLiable}
               />

               {textArea ? (
                  <TextArea
                     placeholder={lgPlaceholder}
                     setLgInput={setLgInput}
                     label={lgLiable}
                     value={lgInput}
                  />
               ) : (
                  <InputSm
                     placeholder={lgPlaceholder}
                     setSmInput={setLgInput}
                     label={lgLiable}
                     value={lgInput}
                  />
               )}

               <button className="addButton">{nameButton}</button>
            </div>
         </form>
      </div>
   );
};
