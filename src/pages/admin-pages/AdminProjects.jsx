import { useLocation } from "react-router-dom";

import defaultImage from "../../assets/images/admin-heroes-projects.png";
import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";
// import { useLoadingData } from "../../hook/useLoadingData";
// import { AdminApi } from "../../api/api";

const dataProjects = [
   {
      id: 1,
      name: "Назва проєкту",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
   {
      id: 2,
      name: "Назва проєкту",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
   { id: 3, name: "Назва проєкту", img: defaultImage, date: "21.07.2023", alt: "slider_photo" },
   {
      id: 4,
      name: "Назва проєкту",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
];

export const AdminProjects = () => {
   const { pathname } = useLocation();
    // const { token } = useAdminContext();
   // const { data, isLoading, error } = useLoadingData(() => AdminApi.getProjectAdmin(token));

   return (
      <div className="admin-hero">
         <AdminMainHeader title={"Проекти"} previousPage={pathname} />
         <AdminMainInnerPart name="Назва" photo="Фото" date="Дата" data={dataProjects} />
      </div>
   );
};
