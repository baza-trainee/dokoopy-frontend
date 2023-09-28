import { AdminApi } from "../../../api/api";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { useLoadingData } from "../../../hook/useLoadingData.js";

export const AddProject = () => {
   const { data, eventLoading } = useLoadingData(AdminApi.addProject, true);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.smInput);
      formData.append("description", data.lgInput);
      formData.append("imageURL", data.selectedFile);
      eventLoading(formData);
   };
   return (
      <section className="page-container">
         <PageHeader title={"Додати новий проєкт"} />
         <AddForm
            smPlaceholder={"Введіть назву проєкту"}
            lgPlaceholder={"Додайте опис проєкту"}
            lgLiable={"Опис проєкту*"}
            smLiable={"Назва проєкту*"}
            nameButton={"Додати проєкт"}
            submitClick={submitClick}
         />
      </section>
   );
};
