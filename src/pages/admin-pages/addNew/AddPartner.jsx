import { AdminApi } from "../../../api/api";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { PartnersForm } from "../../../components/admin-components/PartnersForm";
import { useLoadingData } from "../../../hook/useLoadingData";

export const AddPartner = () => {
   const { data, eventLoading } = useLoadingData(AdminApi.addPartners, true);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.smInput);
      formData.append("description", data.lgInput);
      formData.append("imageURL", data.selectedFile);
      eventLoading(formData);
   };
   return (
      <section className="page-container">
         <PageHeader title={"Додати нового партнера"} />
         <PartnersForm
            smPlaceholder={"Введіть назву партнера"}
            lgPlaceholder={"https://partnerlink/ua"}
            lgLiable={"Назва партнера*"}
            smLiable={"Назва партнера*"}
            nameButton={"Додати партнера"}
            submitClick={submitClick}
         />
      </section>
   );
};
