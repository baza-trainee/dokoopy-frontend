import { useLocation } from "react-router-dom";
import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
// import defaultImage from "../../assets/images/admin-heroes-projects.png";
import { useEffect, useState } from "react";
import { AdminApi } from "../../api/api";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";
import { Spinner } from "../../components/admin-components/Spinner";
import { useLoadingData } from "../../hook/useLoadingData";

// const dataSlider = [
//    {
//       id: 1,
//       title: "Назва слайдеру",
//       img: defaultImage,
//       date: "21.07.2023",
//       alt: "slider_photo",
//    },
//    {
//       id: 2,
//       title: "Назва слайдеру",
//       img: defaultImage,
//       date: "21.07.2023",
//       alt: "slider_photo",
//    },
//    { id: 3, title: "Назва слайдеру", img: defaultImage, date: "21.07.2023", alt: "slider_photo" },
//    {
//       id: 4,
//       title: "Назва слайдеру",
//       img: defaultImage,
//       date: "21.07.2023",
//       alt: "slider_photo",
//    },
// ];
export const AdminHero = () => {
   const [sliders, setSliders] = useState([]);
   const { data, isLoading } = useLoadingData(AdminApi.getHerosAdmin);
   const { pathname } = useLocation();
 

   useEffect(() => {
      if (data !== null) {
         setSliders(data.heroes);
      }
   }, [data]);

   if (isLoading) {
      return <Spinner size={300} color={"#2672e4"} />;
   }

   return (
      <div className="admin-hero">
         <AdminMainHeader title={"Слайдер"} previousPage={pathname} />
         <AdminMainInnerPart name="Назва" photo="Фото" date="Дата" data={sliders} />
      </div>
   );
};
