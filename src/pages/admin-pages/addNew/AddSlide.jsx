import { AdminApi } from "../../../api/api";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { validSchema } from "../../../components/admin-components/formElement/validSchema";
import { useLoadingData } from "../../../hook/useLoadingData";

export const AddSlide = () => {
   const { eventLoading } = useLoadingData(AdminApi.addHero, true);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.e.title);
      formData.append("description", data.e.description);
      formData.append("description_eng", data.e.descriptionEN);
      formData.append("imageURL", data.selectedFile);
      eventLoading(formData);
   };

   return (
      <section className="page-container">
         <PageHeader title={"Додати новий слайдер"} />
         <AddForm
            lgLiable={"Опис слайдеру*"}
            smLiable={"Назва слайдеру*"}
            nameButton={"Додати слайдер"}
            submitClick={submitClick}
            hiddenInputENG={true}
            counter={110}
            schema={validSchema.heros}
         />
      </section>
   );
};
