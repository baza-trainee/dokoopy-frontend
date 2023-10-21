import { AdminApi } from "../../../api/api";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { validSchema } from "../../../components/admin-components/formElement/validSchema";
import { useLoadingData } from "../../../hook/useLoadingData.js";

const AddProject = () => {
   const { eventLoading, data } = useLoadingData(AdminApi.addProject, true);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.e.title);
      formData.append("title_eng", data.e.titleEN);
      formData.append("description", data.e.description);
      formData.append("description_eng", data.e.descriptionEN);
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
            counter={300}
            schema={validSchema.project}
            success={data?.code === 201 ? true : false}
         />
      </section>
   );
};

export default AddProject;
