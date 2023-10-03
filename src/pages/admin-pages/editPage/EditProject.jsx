import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdminApi } from "../../../api/api.js";
import foto from "../../../assets/images/default-image.jpg";
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
      formData.append("title", data.title);
      formData.append("title_eng", data.titleEN);
      formData.append("description", data.description);
      formData.append("description_eng", data.descriptionEN);
      formData.append("imageURL", data.selectedFile);
      updateProject.eventLoading(formData);
   };
   const defaultInfo = {
      img: foto,
      title: "Збір на 57 бригаду",
      title_eng: "Donation for the 57th brigade",
      description:
         "Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо",
      description_eng:
         "We are the 57th brigade and participate in the fiercest battles. Therefore, the need for consumables is simply veeleetenskaya - these are walkie-talkies, car repairs, tires on wheels, etc.",
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
         />
      </section>
   );
};
