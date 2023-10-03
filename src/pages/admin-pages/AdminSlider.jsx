import { useLocation } from "react-router-dom";

import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import defaultImage from "../../assets/images/default-image.jpg";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";
import { useLoadingData } from "../../hook/useLoadingData";
import { AdminApi } from "../../api/api";
import { AdminProvider, useAdminContext } from "../../components/provider-components/admin-provider";

const dataSlider = [
   {
      id: 1,
      name: "Назва слайдеру",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
   {
      id: 2,
      name: "Назва слайдеру",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
   { id: 3, name: "Назва слайдеру", img: defaultImage, date: "21.07.2023", alt: "slider_photo" },
   {
      id: 4,
      name: "Назва слайдеру",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
];
export const AdminHero = () => {
   const { pathname } = useLocation();
   // const { token } = useAdminContext();
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2OTYyNjkwMDgsImV4cCI6MTY5NjI3MjYwOH0.mTnPkQHGfEzqiB9-7GAwPkX-dGqaEhf2Lqg6fCpNkMQ";
  
   // const { data, isLoading, error } = useLoadingData(() => AdminApi.getHerosAdmin(token));
   // console.log(!isLoading ? console.log(data) : null);
   
   // !isLoading ? console.log(data) : null;
   // console.log(isLoading);
   
   return (
      <div className="admin-hero">
         <AdminMainHeader title={"Слайдер"} previousPage={pathname} />
         <AdminMainInnerPart name="Назва" photo="Фото" date="Дата" data={dataSlider} />
      </div>
   );
};
