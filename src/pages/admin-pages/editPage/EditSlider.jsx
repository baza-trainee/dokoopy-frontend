import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { AdminApi } from "../../../api/api";
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
      formData.append("title", data.e.title);
      formData.append("description", data.e.description);
      formData.append("description_eng", data.e.descriptionEN);
      formData.append("imageURL", data.selectedFile);
      formData.append("date", currentHero?.date);

      const params = {
         id: slideId,
         body: formData,
      };
      updateHeros.eventLoading(params);
   };
   const schema = {
      title: yup.string().trim().required("Поле обов'язкове для заповнення"),
      description: yup
         .string()
         .trim()
         .required("Поле обов'язкове для заповнення")
         .max(110, "Ви ввели забагато символів"),
      descriptionEN: yup
         .string()
         .trim()
         .required("Поле обов'язкове для заповнення")
         .max(110, "Ви ввели забагато символів"),
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
            counter={110}
            schema={schema}
         />
      </section>
   );
};
