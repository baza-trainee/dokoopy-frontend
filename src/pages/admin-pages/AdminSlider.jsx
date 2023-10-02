import { useLocation } from "react-router-dom";

import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import defaultImage from "../../assets/images/default-image.jpg";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";
import { useLoadingData } from "../../hook/useLoadingData";
import { AdminApi } from "../../api/api";

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
   { id: 3, name: "Назва блоку", img: defaultImage, date: "21.07.2023", alt: "slider_photo" },
   {
      id: 4,
      name: "Назва блоку",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
];
export const AdminHero = () => {
   const { pathname } = useLocation();
   const { data, isLoading, error } = useLoadingData(AdminApi.getHerosAdmin);
   return (
      <div className="admin-hero">
         <AdminMainHeader title={"Слайдер"} previousPage={pathname} />
         <AdminMainInnerPart name="Назва" photo="Фото" date="Дата" data={dataSlider} />
      </div>
   );
};
