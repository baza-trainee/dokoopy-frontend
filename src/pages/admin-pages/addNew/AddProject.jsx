import * as yup from "yup";
import { AdminApi } from "../../../api/api";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { useLoadingData } from "../../../hook/useLoadingData.js";
export const AddProject = () => {
   const { eventLoading } = useLoadingData(AdminApi.addProject, true);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.e.title);
      formData.append("title_eng", data.e.titleEN);
      formData.append("description", data.e.description);
      formData.append("description_eng", data.e.descriptionEN);
      formData.append("imageURL", data.selectedFile);
      eventLoading(formData);
   };
   const schema = {
      title: yup.string().required("Поле обов'язкове для заповнення").trim(),
      titleEN: yup.string().required("Поле обов'язкове для заповнення").trim(),
      description: yup
         .string()
         .required("Поле обов'язкове для заповнення")
         .max(300, "Ви ввели забагато символів")
         .trim(),
      descriptionEN: yup
         .string()
         .required("Поле обов'язкове для заповнення")
         .max(300, "Ви ввели забагато символів")
         .trim(),
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
            schema={schema}
         />
      </section>
   );
};
