import { AdminApi } from "../../../api/api";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { useLoadingData } from "../../../hook/useLoadingData";

export const AddSlide = () => {
   const { data, eventLoading } = useLoadingData(AdminApi.addHero, true);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.smInput);
      formData.append("description", data.lgInput);
      formData.append("imageURL", data.selectedFile);
      eventLoading(formData);
   };
   return (
      <section className="page-container">
         <PageHeader title={"Додати новий блок"} />
         <AddForm
            smPlaceholder={"Введіть назву блоку"}
            lgPlaceholder={"Додайте опис блоку"}
            lgLiable={"Опис блоку*"}
            smLiable={"Назва блоку*"}
            nameButton={"Додати блок"}
            submitClick={submitClick}
         />
      </section>
   );
};
