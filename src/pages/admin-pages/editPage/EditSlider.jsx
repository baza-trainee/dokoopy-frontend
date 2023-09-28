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
      link: "Збір на 57 бригаду, котрі беруть участь в найзапекліших боях",
   };

   return (
      <section className="page-container">
         <PageHeader edit={true} title={"Додати новий блок"} />
         <AddForm
            smPlaceholder={"Введіть назву блоку"}
            lgPlaceholder={"Додайте опис блоку"}
            lgLiable={"Опис блоку*"}
            smLiable={"Назва блоку*"}
            nameButton={"Додати блок"}
            submitClick={submitClick}
            defaultInfo={defaultInfo}
         />
      </section>
   );
};
