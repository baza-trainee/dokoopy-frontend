import foto from "../../../assets/images/baza.png";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { PartnersForm } from "../../../components/admin-components/PartnersForm";

export const EditPartner = () => {
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
         <PageHeader edit={true} title={"Редагувати партнера"} />
         <PartnersForm
            // smPlaceholder={"Введіть назву партнера"}
            // lgPlaceholder={"https://partnerlink/ua"}
            smLiable={"Назва партнера*"}
            lgLiable={"Посилання на сайт партнера*"}
            nameButton={"Внести зміни"}
            submitClick={submitClick}
            defaultInfo={defaultInfo}
         />
      </section>
   );
};
