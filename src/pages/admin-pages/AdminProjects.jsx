import { useLocation } from "react-router-dom";

// import defaultImage from "../../assets/images/admin-heroes-projects.png";
import { useEffect, useState } from "react";
import { AdminApi } from "../../api/api";
import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";
import { useLoadingData } from "../../hook/useLoadingData";
import { Spinner } from "../../components/admin-components/Spinner";
// const dataProjects = [
//    {
//       id: 1,
//       name: "Назва проєкту",
//       img: defaultImage,
//       date: "21.07.2023",
//       alt: "slider_photo",
//    },
//    {
//       id: 2,
//       name: "Назва проєкту",
//       img: defaultImage,
//       date: "21.07.2023",
//       alt: "slider_photo",
//    },
//    { id: 3, name: "Назва проєкту", img: defaultImage, date: "21.07.2023", alt: "slider_photo" },
//    {
//       id: 4,
//       name: "Назва проєкту",
//       img: defaultImage,
//       date: "21.07.2023",
//       alt: "slider_photo",
//    },
// ];

export const AdminProjects = () => {
   const { pathname } = useLocation();
   const [projects, setProjects] = useState([]);
   const { data, isLoading } = useLoadingData(AdminApi.getProjectAdmin);

   useEffect(() => {
      if (data !== null) {
         setProjects(data.projects);
      }
   }, [data]);

   if (isLoading) {
      return <Spinner size={300} color={"#2672e4"} />;
   }

   return (
      <div className="admin-hero">
         <AdminMainHeader title={"Проєкти"} previousPage={pathname} />
         <AdminMainInnerPart name="Назва" photo="Фото" date="Дата" data={projects} />
      </div>
   );
};
