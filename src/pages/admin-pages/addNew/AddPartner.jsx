import * as yup from "yup";
import { AdminApi } from "../../../api/api";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { PartnersForm } from "../../../components/admin-components/PartnersForm";
import { useLoadingData } from "../../../hook/useLoadingData";
export const AddPartner = () => {
   const { eventLoading } = useLoadingData(AdminApi.addPartners, true);

   const submitClick = data => {
      const formData = new FormData();
      formData.append("title", data.e.title);
      formData.append("description", data.e.link);
      formData.append("imageURL", data.selectedFile);
      eventLoading(formData);
   };
   const schema = {
      title: yup.string().required("Поле обов'язкове для заповнення").trim(),
      link: yup.string().required("Поле обов'язкове для заповнення").trim(),
   };
   return (
      <section className="page-container">
         <PageHeader title={"Додати нового партнера"} />
         <PartnersForm
            lgLiable={"Назва партнера*"}
            smLiable={"Назва партнера*"}
            nameButton={"Додати партнера"}
            submitClick={submitClick}
            schema={schema}
         />
      </section>
   );
};
