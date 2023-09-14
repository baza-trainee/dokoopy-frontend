import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";

export const AddPartners = () => {
   const submitClick = data => {
      console.log(data);
   };
   return (
      <section className="page-container">
         <PageHeader title={"Додати нового партнера"} />
         <AddForm
            smPlaceholder={"Введіть назву партнера"}
            lgPlaceholder={"https://partnerlink/ua"}
            lgLiable={"Назва партнера*"}
            smLiable={"Назва партнера*"}
            textArea={false}
            nameButton={"Додати партнера"}
            submitClick={submitClick}
         />
      </section>
   );
};
