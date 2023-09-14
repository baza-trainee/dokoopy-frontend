import { useRef, useState } from "react";
import editIcon from "../../assets/icon/edit.svg";
import successIcon from "../../assets/icon/success-icon.svg";
export default function AddForm({
   smPlaceholder,
   lgPlaceholder,
   lgLiable,
   smLiable,
   lg = true,
   nameButton,
   submitClick,
   defaultInfo,
}) {
   const [selectedFile, setSelectedFile] = useState(null);
   const [smInput, setSmInput] = useState(defaultInfo?.name || "");
   const [lgInput, setLgInput] = useState(defaultInfo?.link || "");
   const [onLeave, setOnLeave] = useState(false);

   const filePicker = useRef(null);
   const handleFileChange = e => {
      e.preventDefault();
      const file = e.target.files[0];
      setSelectedFile(file);
      console.log(file);
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
   const submitData = {};
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
                  {defaultInfo && <img className="edit-button-icon" src={editIcon}></img>}
               </div>
            </div>
            <div>
               <div className="right-input-blok">
                  <p className="input-liable">{smLiable}</p>
                  <input
                     value={smInput}
                     onChange={e => setSmInput(e.target.value)}
                     placeholder={smPlaceholder}
                     className="sm-input"
                  ></input>

                  <p className="input-liable">{lgLiable}</p>
                  {lg && (
                     <div className={"text-area-blok"}>
                        <textarea
                           value={lgInput}
                           rows="1"
                           className={"lg-input"}
                           cols="10"
                           placeholder={lgPlaceholder}
                           onChange={e => setLgInput(e.target.value)}
                        ></textarea>
                        <p className="counter-input">{lg && `${lgInput.length}/2000`}</p>
                     </div>
                  )}
                  {!lg && (
                     <input
                        value={lgInput}
                        onChange={e => setLgInput(e.target.value)}
                        type="textarea"
                        placeholder={lgPlaceholder}
                        className={"sm-input"}
                     ></input>
                  )}

                  <button className="addButton">{nameButton}</button>
               </div>
            </div>
         </form>
      </div>
   );
}
