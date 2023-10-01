import { useParams } from "react-router-dom";

import foto from "../../../assets/images/hero_example.jpg";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";

export const EditSlider = () => {
   const { slideId } = useParams();

   const submitClick = data => {
      console.log(data);
   };

   const defaultInfo = {
      img: foto,
      name: "",
      description: "Збір на 57 бригаду, котрі беруть участь в найзапекліших боях",
      descriptionENG: "Gathering for the 57th brigade participating in the fiercest battles",
   };

   return (
      <section className="page-container">
         <PageHeader edit={true} title={"Редагувати слайдер"} />
         <AddForm
            // smPlaceholder={"Введіть назву блоку"}
            // lgPlaceholder={"Додайте опис блоку"}
            lgLiable={"Опис слайдеру*"}
            smLiable={"Назва слайдеру*"}
            nameButton={"Внести зміни"}
            submitClick={submitClick}
            defaultInfo={defaultInfo}
            hiddenInputENG={true}
         />
      </section>
   );
};
