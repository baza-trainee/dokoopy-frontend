import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { AdminApi } from "../../../api/api.js";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { useLoadingData } from "../../../hook/useLoadingData.js";
export const EditProject = () => {
   const { projectId } = useParams();
   const [currentProject, setCurrentProject] = useState(null);
   const deleteProject = useLoadingData(AdminApi.deleteProject, true);
   const updateProject = useLoadingData(AdminApi.updateProject, true);
   const getProject = useLoadingData(AdminApi.getProjectAdmin);

   useEffect(() => {
      if (getProject.data?.projects) {
         setCurrentProject(getProject.data.projects.find(({ id }) => id === projectId));
      }
   }, [getProject.data]);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.e.title);
      formData.append("title_eng", data.e.titleEN);
      formData.append("description", data.e.description);
      formData.append("description_eng", data.e.descriptionEN);
      formData.append("imageURL", data.selectedFile);
      formData.append("date", currentProject?.date);
      const params = {
         id: projectId,
         body: formData,
      };
      updateProject.eventLoading(params);
   };

   const schema = {
      title: yup.string().required("Поле обов'язкове для заповнення"),
      titleEN: yup.string().required("Поле обов'язкове для заповнення"),
      description: yup
         .string()
         .required("Поле обов'язкове для заповнення")
         .max(300, "Ви ввели забагато символів"),
      descriptionEN: yup
         .string()
         .required("Поле обов'язкове для заповнення")
         .max(300, "Ви ввели забагато символів"),
   };
   return (
      <section className="page-container">
         <PageHeader
            removeClick={() => deleteProject.eventLoading(projectId)}
            edit={true}
            title={"Редагувати проєкт"}
         />
         <AddForm
            isEdit={true}
            lgLiable={"Опис проєкту*"}
            smLiable={"Назва проєкту*"}
            nameButton={"Внести зміни"}
            defaultInfo={currentProject}
            submitClick={submitClick}
            counter={300}
            schema={schema}
         />
      </section>
   );
};
