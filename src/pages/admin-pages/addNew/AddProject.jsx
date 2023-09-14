import AddForm from "../../../components/admin-components/AddForm";
import SubTitle from "../../../components/admin-components/SubTitle";

export default function AddProject() {
   return (
      <section className="page-container">
         <SubTitle title={"Додати новий проєкт"} />
         <AddForm
            smPlaceholder={"Введіть назву проєкту"}
            lgPlaceholder={"Додайте опис проєкту"}
            lgLiable={"Опис проєкту*"}
            smLiable={"Назва проєкту*"}
            nameButton={"Додати проєкт"}
         />
      </section>
   );
}
