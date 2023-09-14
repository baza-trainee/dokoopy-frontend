import foto from "../../../assets/images/default-image.jpg";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";

export const EditProject = () => {
   const defaultInfo = {
      img: foto,
      name: "Збір на 57 бригаду",
      link: "Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо",
   };
   const submitClick = data => {
      console.log(data);
   };
   return (
      <section className="page-container">
         <PageHeader edit={true} title={"Додати новий проєкт"} />
         <AddForm
            smPlaceholder={"Введіть назву проєкту"}
            lgPlaceholder={"Додайте опис проєкту"}
            lgLiable={"Опис проєкту*"}
            smLiable={"Назва проєкту*"}
            nameButton={"Додати проєкт"}
            defaultInfo={defaultInfo}
            submitClick={submitClick}
         />
      </section>
   );
};
