import { useLocation } from "react-router-dom";
import { AdminApi } from "../../../api/api";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { PartnersForm } from "../../../components/admin-components/PartnersForm";
import { validSchema } from "../../../components/admin-components/formElement/validSchema";
import { useLoadingData } from "../../../hook/useLoadingData";

export const EditPartner = () => {
   const { state } = useLocation();

   const deletePartner = useLoadingData(AdminApi.deletePartners, true);
   const updatePartner = useLoadingData(AdminApi.updatePartners, true);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.e.title);
      formData.append("link", data.e.link);
      formData.append("imageURL", data.selectedFile);
      const params = {
         id: state?.item._id,
         body: formData,
      };
      updatePartner.eventLoading(params);
   };

   return (
      <section className="page-container">
         <PageHeader
            removeClick={() => deletePartner.eventLoading(state?.item._id)}
            edit={true}
            title={"Редагувати партнера"}
            success={deletePartner?.data?.code === 200 ? true : false}
         />

         <PartnersForm
            smLiable={"Назва партнера*"}
            lgLiable={"Посилання на сайт партнера*"}
            nameButton={"Внести зміни"}
            submitClick={submitClick}
            defaultInfo={state?.item}
            schema={validSchema.partner}
            success={updatePartner.data?.code === 200 ? true : false}
         />
      </section>
   );
};
