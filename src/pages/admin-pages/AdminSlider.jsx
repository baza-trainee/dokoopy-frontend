import { useLocation } from "react-router-dom";
import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import defaultImage from "../../assets/images/admin-heroes-projects.png";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";
import { useLoadingData } from "../../hook/useLoadingData";
import { AdminApi } from "../../api/api";
import { useEffect, useState } from "react";

const dataSlider = [
   {
      id: 1,
      title: "Назва слайдеру",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
   {
      id: 2,
      title: "Назва слайдеру",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
   { id: 3, title: "Назва слайдеру", img: defaultImage, date: "21.07.2023", alt: "slider_photo" },
   {
      id: 4,
      title: "Назва слайдеру",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
];
export const AdminHero = () => {
   const [sliders, setSliders] = useState([]);
   const dataFromBack= useLoadingData(AdminApi.getHerosAdmin);
   const { pathname } = useLocation();
   useEffect(() => {
      if (dataFromBack.data?.heroes) {
         setSliders(sliders.data.heroes);
      }
   }, [dataFromBack.data?.heroes]);


   console.log(sliders);
   // console.log(sliders);

   
   return (
      <div className="admin-hero">
         <AdminMainHeader title={"Слайдер"} previousPage={pathname} />
         <AdminMainInnerPart name="Назва" photo="Фото" date="Дата" data={dataSlider} />
      </div>
   );
};
