import foto from "../../../assets/images/photo5.jpeg";
import AddForm from "../../../components/admin-components/AddForm";
import SubTitle from "../../../components/admin-components/SubTitle";
export default function EditPartners() {
   const submitClick = data => {
      console.log(data);
   };
   const defaultInfo = {
      img: foto,
      name: "baza-trainee",
      link: "https://baza-trainee.tech/ua",
   };
   return (
      <section className="page-container">
         <SubTitle edit={true} title={"Додати нового партнера"} />
         <AddForm
            smPlaceholder={"Введіть назву партнера"}
            lgPlaceholder={"https://partnerlink/ua"}
            lgLiable={"Назва партнера*"}
            smLiable={"Назва партнера*"}
            lg={false}
            nameButton={"Додати партнера"}
            submitClick={submitClick}
            defaultInfo={defaultInfo}
         />
      </section>
   );
}
