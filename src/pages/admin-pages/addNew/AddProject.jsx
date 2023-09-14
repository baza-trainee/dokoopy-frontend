import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";

const submitClick = data => {
   console.log(data);
};
export const AddProject = () => {
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
