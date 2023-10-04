import React, { useState } from "react";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import fileText from "../../../assets/icon/filetext.svg";
import { FilesPicker } from "../../../components/admin-components/formElement/FilesPicker";

export const EditReporting = () => {
   const reportingData = {
      name: "57_.pdf",
      imgIcon: fileText,
   };

   const [selectedFile, setSelectedFile] = useState(null);

   useState(() => {
      const previousFileData = {
         name: reportingData.name,
         img: reportingData.imgIcon,
      };
      setSelectedFile(previousFileData);
   }, [reportingData]);

   const handleFileSelect = file => {
      setSelectedFile(file);
   };

   const handleFormSubmit = () => {
      console.log("Selected File:", selectedFile);
   };

   return (
      <section className="page-container">
         <PageHeader title={"Редагувати звітність"} />
         <div className="edit-reportin-form-wrap">
            <FilesPicker
               defaultInfo={reportingData}
               selectedFile={selectedFile}
               setSelectedFile={handleFileSelect}
            />
            <div className="edit-reportin-btn">
               <button className="admin-button" onClick={handleFormSubmit}>
                  Внести зміни
               </button>
            </div>
         </div>
      </section>
   );
};
