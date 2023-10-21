import { useEffect, useState } from "react";
import axios from "axios";
import fileText from "../../../assets/icon/filetext.svg";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { FilesPicker } from "../../../components/admin-components/formElement/FilesPicker";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoadingData } from "../../../hook/useLoadingData";
import { AdminApi } from "../../../api/api";

const EditReporting = () => {
   const location = useLocation();
   const { state } = location;

   const [error, setError] = useState(null);
   const [selectedFile, setSelectedFile] = useState(null);

   const { data, eventLoading } = useLoadingData(AdminApi.updateReports, true);
   const navigate = useNavigate();

   useEffect(() => {
      data?.code === 200 ? navigate(-1) : null;
   }, [navigate, data?.code]);

   useEffect(() => {
      if (state && state.report) {
         console.log("Selected Report:", state.report);
         setSelectedFile(state.report);
      }
   }, [state]);

   const handleFileSelect = file => {
      setSelectedFile(file);
   };

   const handleFormSubmit = () => {
      if (!selectedFile || !state.item._id) {
         return;
      }

      const formData = new FormData();
      formData.append("reportURL", selectedFile);
      const fileId = state.item._id;

      axios
         .patch(`reports/admin/${fileId}`, formData, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         })
         .then(response => {
            if (response.status === 200) {
               console.log("Звіт був успішно оновлений:", response.data);
               navigate(-1);
            } else {
               console.error(
                  "Помилка оновлення звіту. Отримано неправильний статус відповіді:",
                  response.status
               );
            }
         })
         .catch(error => {
            console.error("Помилка оновлення звіту:", error);
         });
   };

   return (
      <section className="page-container page-container-reporting">
         <PageHeader title={"Редагувати звітність"} />
         <div className="edit-reporting-form-wrap">
            <FilesPicker
               selectedFile={selectedFile}
               setSelectedFile={handleFileSelect}
               filesType=".pdf"
               title="Файл"
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

export default EditReporting;
