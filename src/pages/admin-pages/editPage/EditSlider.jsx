import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { AdminApi } from "../../../api/api";
import foto from "../../../assets/images/hero_example.jpg";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { useLoadingData } from "../../../hook/useLoadingData";

export const EditSlider = () => {
   const { slideId } = useParams();
   const [currentHero, setCurrentHero] = useState(null);
   const deleteHeros = useLoadingData(AdminApi.deleteHero, true);
   const updateHeros = useLoadingData(AdminApi.updateHero, true);
   const getHeros = useLoadingData(AdminApi.getHerosAdmin);

   useEffect(() => {
      if (getHeros.data?.heroes) {
         setCurrentHero(getHeros.data.heroes.find(({ id }) => id === slideId));
      }
   }, [getHeros.data?.heroes]);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("description_eng", data.descriptionEN);
      formData.append("imageURL", data.selectedFile);

      const params = {
         id: slideId,
         body: formData,
      };
      updateHeros.eventLoading(params);
   };

   const defaultInfo = {
      imageURL: foto,
      title: "",
      description: "Збір на 57 бригаду, котрі беруть участь в найзапекліших боях",
      description_eng: "Gathering for the 57th brigade participating in the fiercest battles",
   };

   return (
      <section className="page-container">
         <PageHeader
            removeClick={() => deleteHeros.eventLoading(slideId)}
            edit={true}
            title={"Редагувати слайдер"}
         />
         <AddForm
            isEdit={true}
            lgLiable={"Опис слайдеру*"}
            smLiable={"Назва слайдеру*"}
            nameButton={"Внести зміни"}
            submitClick={submitClick}
            defaultInfo={currentHero}
            hiddenInputENG={true}
         />
      </section>
   );
};
