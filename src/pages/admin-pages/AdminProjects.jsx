import { useLocation } from "react-router-dom";

// import defaultImage from "../../assets/images/admin-heroes-projects.png";
import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";
import { useLoadingData } from "../../hook/useLoadingData";
import { useEffect, useState } from "react";
import { AdminApi } from "../../api/api";

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
   let dataFromBack=useLoadingData(AdminApi.getProjectAdmin);
 
   useEffect(() => {
      if (dataFromBack.data!==null) {
         setProjects(dataFromBack.data.projects);
      }
   }, [dataFromBack.data]);

   return (
      <div className="admin-hero">
         <AdminMainHeader title={"Проєкти"} previousPage={pathname} />
         <AdminMainInnerPart name="Назва" photo="Фото" date="Дата" data={projects} />
      </div>
   );
};
