import AddForm from "../../../components/admin-components/AddForm";
import SubTitle from "../../../components/admin-components/SubTitle";

export default function AddSlider() {
   const submitClick = data => {
      console.log(data);
   };
   return (
      <section className="page-container">
         <SubTitle title={"Додати новий блок"} />
         <AddForm
            smPlaceholder={"Введіть назву блоку"}
            lgPlaceholder={"Додайте опис блоку"}
            lgLiable={"Опис блоку*"}
            smLiable={"Назва блоку*"}
            nameButton={"Додати блок"}
            submitClick={submitClick}
         />
      </section>
   );
}
