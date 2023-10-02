import { useState } from "react";

import { FilesPicker } from "./formElement/FilesPicker";
import { InputSm } from "./formElement/InputSm";
export const PartnersForm = ({
   smPlaceholder,
   lgPlaceholder,
   lgLiable,
   smLiable,

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
            <div className="partner-file-blok">
               <FilesPicker
                  selectedFile={selectedFile}
                  setSelectedFile={setSelectedFile}
                  defaultInfo={defaultInfo}
               />
            </div>
            <div className="form-input-container">
               <InputSm
                  placeholder={smPlaceholder}
                  value={smInput}
                  setSmInput={setSmInput}
                  label={smLiable}
               />

               <InputSm
                  placeholder={lgPlaceholder}
                  setSmInput={setLgInput}
                  label={lgLiable}
                  value={lgInput}
                  isLink={true}
               />

               <div className="form-button-blok">
                  <button className="admin-button">{nameButton}</button>
               </div>
            </div>
         </form>
      </div>
   );
};
