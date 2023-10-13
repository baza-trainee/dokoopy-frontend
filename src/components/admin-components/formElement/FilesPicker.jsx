import { useRef, useState } from "react";
import { EditIcon } from "../../../assets/admin-icons/EditIcon";
import successIcon from "../../../assets/icon/success-icon.svg";

export const FilesPicker = ({
   errors,
   setError,
   defaultInfo,
   selectedFile,
   setSelectedFile,
   filesType = ".png, .jpeg, .webp, .jpg",
   title = "Фото",
}) => {
   const [isSuccessFile, setSuccessFile] = useState(false);
   const filePicker = useRef(null);

   const fileValidator = file => {
      const valFilesPattern = filesType.split(" ");
      const matchFile = file?.type.split("/")[1];
      const isMath = valFilesPattern.find(item => item.includes(matchFile));

      if (!isMath) {
         setError("Вибраний файл не підримується");
      } else if (file.size > 5 * 1024 * 1024) {
         setError("Максимальний розмір файлу 5Мб");
      } else {
         setError(null);
         setSelectedFile(file);
         setSuccessFile(true);
      }
   };
   const handleFileChange = e => {
      e.preventDefault();
      const file = e.target.files[0];
      if (file) {
         fileValidator(file);
      }
   };

   const handleDrop = e => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) {
         fileValidator(file);
      }
   };

   const handleDragOver = e => {
      e.preventDefault();
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
      >
         <div className="label-icon-blok">
            <p className="input-liable">{title}*</p>

            <div onClick={handelPick} className="edit-button-icon">
               <EditIcon />
            </div>
         </div>
         <input
            ref={filePicker}
            className="hidden"
            type="file"
            accept={filesType}
            onChange={handleFileChange}
         />
         <div htmlFor="drag-input" onClick={handelPick} className={"drag-input"}>
            <label>
               {isSuccessFile && selectedFile ? (
                  <div className="success-icon">
                     <img src={successIcon}></img>
                     <label>{selectedFile?.name}</label>
                  </div>
               ) : (
                  <div className="editImg">
                     {defaultInfo ? (
                        <img src={defaultInfo.imageURL} className="editImg-default"></img>
                     ) : (
                        <p className="file-placeholder">
                           Перетягніть або натисніть тут, щоб завантажити файл
                        </p>
                     )}
                  </div>
               )}
            </label>
         </div>
         {!!errors && <p className="error-message error-file">{errors}</p>}
      </div>
   );
};
