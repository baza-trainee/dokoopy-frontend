import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdminApi } from "../../../api/api.js";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { validSchema } from "../../../components/admin-components/formElement/validSchema.js";
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
   return (
      <section className="page-container">
         <PageHeader
            removeClick={() => deleteProject.eventLoading(projectId)}
            edit={true}
            title={"Редагувати проєкт"}
         />
         <AddForm
            lgLiable={"Опис проєкту*"}
            smLiable={"Назва проєкту*"}
            nameButton={"Внести зміни"}
            defaultInfo={currentProject}
            submitClick={submitClick}
            counter={300}
            schema={validSchema.project}
         />
      </section>
   );
};
