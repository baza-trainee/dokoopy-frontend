import { AdminApi } from "../../../api/api";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { useLoadingData } from "../../../hook/useLoadingData.js";

export const AddProject = () => {
   const { eventLoading } = useLoadingData(AdminApi.addProject, true);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("title_eng", data.titleEN);
      formData.append("description", data.description);
      formData.append("description_eng", data.descriptionEN);
      formData.append("imageURL", data.selectedFile);
      eventLoading(formData);
   };
   return (
      <section className="page-container">
         <PageHeader title={"Додати новий проєкт"} />
         <AddForm
            lgLiable={"Опис проєкту*"}
            smLiable={"Назва проєкту*"}
            nameButton={"Додати проєкт"}
            submitClick={submitClick}
         />
      </section>
   );
};
