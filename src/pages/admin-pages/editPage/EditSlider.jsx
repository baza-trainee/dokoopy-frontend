import { useLocation } from "react-router-dom";
import { AdminApi } from "../../../api/api";
import { AddForm } from "../../../components/admin-components/AddForm";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { validSchema } from "../../../components/admin-components/formElement/validSchema";
import { useLoadingData } from "../../../hook/useLoadingData";

export const EditSlider = () => {
   const { state } = useLocation();
   const deleteHeros = useLoadingData(AdminApi.deleteHero, true);
   const updateHeros = useLoadingData(AdminApi.updateHero, true);
   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.e.title);
      formData.append("description", data.e.description);
      formData.append("description_eng", data.e.descriptionEN);
      formData.append("imageURL", data.selectedFile);
      formData.append("date", state.item?.date);

      const params = {
         id: state.item.id,
         body: formData,
      };
      updateHeros.eventLoading(params);
   };

   return (
      <section className="page-container">
         <PageHeader
            removeClick={() => deleteHeros.eventLoading(state.item.id)}
            edit={true}
            title={"Редагувати слайдер"}
            success={deleteHeros.data?.code === 200 ? true : false}
            minLength={state.minLength}
         />

         <AddForm
            lgLiable={"Опис слайдеру*"}
            smLiable={"Назва слайдеру*"}
            nameButton={"Внести зміни"}
            submitClick={submitClick}
            defaultInfo={state.item}
            hiddenInputENG={true}
            counter={110}
            schema={validSchema.heros}
            success={updateHeros.data?.code === 200 ? true : false}
         />
      </section>
   );
};
