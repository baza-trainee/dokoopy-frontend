import { useRef, useState } from "react";
import { EditIcon } from "../../../assets/icon/EditIcon";
import successIcon from "../../../assets/icon/success-icon.svg";

export const FilesPicker = ({ defaultInfo, selectedFile, setSelectedFile }) => {
   const [onLeave, setOnLeave] = useState(false);
   const filePicker = useRef(null);

   const handleFileChange = e => {
      e.preventDefault();
      const file = e.target.files[0];
      setSelectedFile(file);
   };

   const handleDrop = e => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];

      setSelectedFile(file);
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
         <p className="liable-piker">Фото*</p>
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
               {selectedFile ? (
                  <div className="success-icon">
                     <img src={successIcon}></img>
                     <label>{selectedFile.name}</label>
                  </div>
               ) : (
                  <>
                     {defaultInfo ? (
                        <div
                           className="editImg"
                           style={{
                              backgroundImage: `url(${defaultInfo.img})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                           }}
                        ></div>
                     ) : (
                        "Drag & Drop or Click to Select a File"
                     )}
                  </>
               )}
            </label>
            {defaultInfo && (
               <div className="edit-button-icon">
                  <EditIcon />
               </div>
            )}
         </div>
      </div>
   );
};
