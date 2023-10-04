import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdminApi } from "../../../api/api";
import foto from "../../../assets/images/baza.png";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { PartnersForm } from "../../../components/admin-components/PartnersForm";
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
      formData.append("title", data.smInput);
      formData.append("description", data.lgInput);
      formData.append("imageURL", data.selectedFile);
      const params = {
         id: partnerId,
         body: formData,
      };
      updatePartner.eventLoading(params);
   };
   const defaultInfo = {
      img: foto,
      name: "baza-trainee",
      link: "https://baza-trainee.tech/ua",
   };
   return (
      <section className="page-container">
         <PageHeader
            removeClick={() => deletePartner.eventLoading(partnerId)}
            edit={true}
            title={"Редагувати партнера"}
         />
         <PartnersForm
            isEdit={true}
            smLiable={"Назва партнера*"}
            lgLiable={"Посилання на сайт партнера*"}
            nameButton={"Внести зміни"}
            submitClick={submitClick}
            defaultInfo={currentPartner}
         />
      </section>
   );
};
