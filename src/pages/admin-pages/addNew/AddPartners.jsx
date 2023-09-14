import AddForm from "../../../components/admin-components/AddForm";
import SubTitle from "../../../components/admin-components/SubTitle";
export default function AddPartners() {
   const submitClick = data => {
      console.log(data);
   };
   return (
      <section className="page-container">
         <SubTitle title={"Додати нового партнера"} />
         <AddForm
            smPlaceholder={"Введіть назву партнера"}
            lgPlaceholder={"https://partnerlink/ua"}
            lgLiable={"Назва партнера*"}
            smLiable={"Назва партнера*"}
            lg={false}
            nameButton={"Додати партнера"}
            submitClick={submitClick}
         />
      </section>
   );
}
