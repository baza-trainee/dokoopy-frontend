import React, { useState } from "react";
import fileText from "../../../assets/icon/filetext.svg";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { FilesPicker } from "../../../components/admin-components/formElement/FilesPicker";

export const EditReporting = () => {
   const reportingData = {
      title: "57_.pdf",
      imageURL: fileText,
   };

   const [selectedFile, setSelectedFile] = useState(null);
   const [error, setError] = useState(null);
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
      <section className="page-container page-container-reporting">
         <PageHeader currentModal={"звітність"} title={"Редагувати звітність"} />
         <div className="edit-reporting-form-wrap">
            <FilesPicker
               defaultInfo={reportingData}
               selectedFile={selectedFile}
               setSelectedFile={handleFileSelect}
               filesType={".pdf"}
               title={"Файл"}
               errors={error}
               setError={setError}
            />
            <div className="edit-reporting-btn">
               <button className="admin-button" onClick={handleFormSubmit}>
                  Внести зміни
               </button>
            </div>
         </div>
      </section>
   );
};
