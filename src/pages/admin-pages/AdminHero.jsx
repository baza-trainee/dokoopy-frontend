import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import defaultImage from "../../assets/images/default-image.jpg";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";

const dataSlider = [
   {
      id: 1,
      name: "Назва блоку",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
   {
      id: 2,
      name: "Назва блоку",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
   {id: 3,
      name: "Назва блоку",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
   {
      id: 4,
      name: "Назва блоку",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
];
export const AdminHero = () => {
   return (
   <div className="admin-hero">
      <AdminMainHeader title={"Слайдер"} />
      <AdminMainInnerPart name="Name" photo="Photo" date="Date" data={dataSlider} /> 
   </div>
   );
};
