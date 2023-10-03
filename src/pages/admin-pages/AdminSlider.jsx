import { useLocation } from "react-router-dom";

import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import defaultImage from "../../assets/images/default-image.jpg";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";
// import { useLoadingData } from "../../hook/useLoadingData";
// import { AdminApi } from "../../api/api";
// import { AdminProvider, useAdminContext } from "../../components/provider-components/admin-provider";

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
   // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVzdGFzanVrQGdtYWlsLmNvbSIsImlhdCI6MTY5NjMyNjE4NSwiZXhwIjoxNjk2MzI5Nzg1fQ.VC4-pCuwpVVovD2qa1fawalTMWYL6RFYbArf-4RU-9k";
   // const headers = {
   //    "Content-Type": "application/json",
   //    Authorization: `Bearer ${token}`,
   // };
   // const { data, isLoading, error } = useLoadingData(() => AdminApi.getHerosAdmin(token));
   // let dataFromBack;
   // if(data !== null) {
   //    console.log(data);
   //    dataFromBack = data;
   // }
   // !isLoading ? console.log(data) : null;
   
   return (
      <div className="admin-hero">
         <AdminMainHeader title={"Слайдер"} previousPage={pathname} />
         <AdminMainInnerPart name="Назва" photo="Фото" date="Дата" data={dataSlider} />
      </div>
   );
};
