import { AdminApi } from "../../../api/api";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { PartnersForm } from "../../../components/admin-components/PartnersForm";
import { validSchema } from "../../../components/admin-components/formElement/validSchema";
import { useLoadingData } from "../../../hook/useLoadingData";

const AddPartner = () => {
   const { eventLoading, data } = useLoadingData(AdminApi.addPartners, true);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.e.title);
      formData.append("link", data.e.link);
      formData.append("imageURL", data.selectedFile);
      eventLoading(formData);
   };

   return (
      <section className="page-container">
         <PageHeader title={"Додати нового партнера"} />
         <PartnersForm
            lgLiable={"Посилання на сайт партнера*"}
            smLiable={"Назва партнера*"}
            nameButton={"Додати партнера"}
            submitClick={submitClick}
            schema={validSchema.partner}
            success={data?.code === 201 ? true : false}
         />
      </section>
   );
};

export default AddPartner;
