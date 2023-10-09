import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdminApi } from "../../../api/api";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { PartnersForm } from "../../../components/admin-components/PartnersForm";
import { Spinner } from "../../../components/admin-components/Spinner";
import { validSchema } from "../../../components/admin-components/formElement/validSchema";
import { useLoadingData } from "../../../hook/useLoadingData";

export const EditPartner = () => {
   const { partnerId } = useParams();
   const [currentPartner, setCurrentPartner] = useState();
   const deletePartner = useLoadingData(AdminApi.deletePartners, true);
   const updatePartner = useLoadingData(AdminApi.updatePartners, true);
   const getPartner = useLoadingData(AdminApi.getPartnersAdmin);

   useEffect(() => {
      if (getPartner.data?.partners) {
         setCurrentPartner(getPartner.data.partners.find(({ id }) => id === partnerId));
      }
   }, [getPartner.data]);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.e.title);
      formData.append("link", data.e.link);
      formData.append("imageURL", data.selectedFile);
      const params = {
         id: partnerId,
         body: formData,
      };
      updatePartner.eventLoading(params);
   };

   return (
      <section className="page-container">
         <PageHeader
            removeClick={() => deletePartner.eventLoading(partnerId)}
            edit={true}
            title={"Редагувати партнера"}
            currentModal={"партнера"}
            success={deletePartner?.data?.code === 200 ? true : false}
         />
         {!currentPartner ? (
            <Spinner size={300} color={"#2672e4"} />
         ) : (
            <PartnersForm
               smLiable={"Назва партнера*"}
               lgLiable={"Посилання на сайт партнера*"}
               nameButton={"Внести зміни"}
               submitClick={submitClick}
               defaultInfo={currentPartner}
               schema={validSchema.partner}
               success={updatePartner.data?.code === 200 ? true : false}
            />
         )}
      </section>
   );
};
