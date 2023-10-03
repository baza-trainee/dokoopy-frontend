import { useRef, useState } from "react";
import { EditIcon } from "../../../assets/icon/EditIcon";
import successIcon from "../../../assets/icon/success-icon.svg";

export const FilesPicker = ({ defaultInfo, selectedFile, setSelectedFile }) => {
   const [onLeave, setOnLeave] = useState(false);
   const [isSuccessFile, setSuccessFile] = useState(false);
   const filePicker = useRef(null);

   const handleFileChange = e => {
      e.preventDefault();
      const file = e.target.files[0];
      setSelectedFile(file);
      setSuccessFile(true);
   };

   const handleDrop = e => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      setFile(true);
      setSuccessFile(file);
   };

   const handleDragOver = e => {
      e.preventDefault();
      setOnLeave(true);
   };
   const handelPick = () => {
      filePicker.current.click();
   };
   return (
      <div
         className="drag"
         onDrop={handleDrop}
         onDragOver={handleDragOver}
         onDragStart={handleDragOver}
         onDragLeave={() => setOnLeave(false)}
      >
         <div className="label-icon-blok">
            <p className="input-liable">Фото*</p>
            {defaultInfo && (
               <div onClick={handelPick} className="edit-button-icon">
                  <EditIcon />
               </div>
            )}
         </div>
         <input
            ref={filePicker}
            className="hidden"
            type="file"
            accept=".pdf, .jpg, .png, .gif"
            onChange={handleFileChange}
         />
         <div
            htmlFor="drag-input"
            onClick={handelPick}
            className={onLeave ? "active-drop" : "drag-input"}
         >
            <label>
               {isSuccessFile ? (
                  <div className="success-icon">
                     <img src={successIcon}></img>
                     <label>{selectedFile?.name}</label>
                  </div>
               ) : (
                  <div className="editImg">
                     {defaultInfo ? (
                        <img
                           src={`https://dokoopy.onrender.com/${defaultInfo.imageURL}`}
                           className="editImg-default"
                        ></img>
                     ) : (
                        <p className="file-placeholder">
                           Перетягніть або натисніть тут, щоб завантажити файл
                        </p>
                     )}
                  </div>
               )}
            </label>
         </div>
      </div>
   );
};
