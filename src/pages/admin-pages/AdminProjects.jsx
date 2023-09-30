import { useLocation } from "react-router-dom";

import defaultImage from "../../assets/images/default-image.jpg";
import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";

const dataProjects = [
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
   { id: 3, name: "Назва блоку", img: defaultImage, date: "21.07.2023", alt: "slider_photo" },
   {
      id: 4,
      name: "Назва блоку",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
];

export const AdminProjects = () => {
   const { pathname } = useLocation();

   return (
      <div className="admin-hero">
         <AdminMainHeader title={"Проекти"} previousPage={pathname} />
         <AdminMainInnerPart name="Назва" photo="Фото" date="Дата" data={dataProjects} />
      </div>
   );
};
