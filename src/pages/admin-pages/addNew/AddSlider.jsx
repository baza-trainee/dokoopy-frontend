import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";

export const AddSlider = () => {
   const submitClick = data => {
      console.log(data);
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
