import foto from "../../../assets/images/default-image.jpg";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";

export const EditProject = () => {
   const defaultInfo = {
      img: foto,
      name: "Збір на 57 бригаду",
      nameENG: "Donation for the 57th brigade",
      description:
         "Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо",
      descriptionENG:
         "We are the 57th brigade and participate in the fiercest battles. Therefore, the need for consumables is simply veeleetenskaya - these are walkie-talkies, car repairs, tires on wheels, etc.",
   };
   const submitClick = data => {
      console.log(data);
   };
   return (
      <section className="page-container">
         <PageHeader edit={true} title={"Редагувати проєкт"} />
         <AddForm
            // smPlaceholder={"Введіть назву проєкту"}
            // lgPlaceholder={"Додайте опис проєкту"}
            lgLiable={"Опис проєкту*"}
            smLiable={"Назва проєкту*"}
            nameButton={"Внести зміни"}
            defaultInfo={defaultInfo}
            submitClick={submitClick}
         />
      </section>
   );
};
