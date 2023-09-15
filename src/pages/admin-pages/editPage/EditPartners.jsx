import foto from "../../../assets/images/logo-baza.svg";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";

export const EditPartners = () => {
   const submitClick = data => {
      console.log(data);
   };
   const defaultInfo = {
      img: foto,
      name: "baza-trainee",
      link: "https://baza-trainee.tech/ua",
   };
   return (
      <section className="page-container">
         <PageHeader edit={true} title={"Додати нового партнера"} />
         <AddForm
            smPlaceholder={"Введіть назву партнера"}
            lgPlaceholder={"https://partnerlink/ua"}
            lgLiable={"Назва партнера*"}
            smLiable={"Назва партнера*"}
            textArea={false}
            nameButton={"Додати партнера"}
            submitClick={submitClick}
            defaultInfo={defaultInfo}
         />
      </section>
   );
};
