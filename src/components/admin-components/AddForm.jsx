import { useEffect, useState } from "react";
import { FilesPicker } from "./formElement/FilesPicker";
import { InputSm } from "./formElement/InputSm";
import { TextArea } from "./formElement/TextArea";
export const AddForm = ({
   isEdit,
   lgLiable,
   smLiable,
   nameButton,
   submitClick = () => {},
   defaultInfo,
   hiddenInputENG = false,
}) => {
   const [title, setTitle] = useState("");
   const [titleEN, setTitleEn] = useState("");
   const [description, setDescription] = useState("");
   const [descriptionEN, setDescriptionEN] = useState("");
   const [selectedFile, setSelectedFile] = useState(() => null);
   useEffect(() => {
      if (defaultInfo) {
         setTitle(defaultInfo.title);
         setTitleEn(defaultInfo.title_eng);
         setDescription(defaultInfo.description);
         setDescriptionEN(defaultInfo.description_eng);
         setSelectedFile(defaultInfo.imageURL);
      }
   }, [defaultInfo]);

   const submitClickEvent = e => {
      e.preventDefault();
      if (title.length && description.length && descriptionEN.length && selectedFile) {
         submitClick({
            title,
            titleEN,
            description,
            descriptionEN,
            selectedFile,
         });
      }
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
                     isEdit={isEdit}
                  />
               </div>
               <div className="language-liable">UA</div>
               <InputSm value={title} setSmInput={setTitle} label={smLiable} />

               <TextArea setLgInput={setDescription} label={lgLiable} value={description} />

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
                  <div className="input-blok"> </div>
               ) : (
                  <InputSm value={titleEN} setSmInput={setTitleEn} label={smLiable} />
               )}

               <TextArea setLgInput={setDescriptionEN} label={lgLiable} value={descriptionEN} />

               <div className="form-button-blok">
                  <button className="admin-button">{nameButton}</button>
               </div>
            </div>
         </form>
      </div>
   );
};
