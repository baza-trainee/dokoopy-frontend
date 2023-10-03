import { useLocation } from "react-router-dom";

import defaultIcon from "../../assets/icon/baza_trainee.svg";
import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";
import { useLoadingData } from "../../hook/useLoadingData";
import { AdminApi } from "../../api/api";

const dataPartners = [
   {
      id: 1,
      name: "Baza Trainee Ukraine",
      img: defaultIcon,
      link: "https://baza-trainee.tech/ua",
      alt: "partners_photo",
   },
   {
      id: 2,
      name: "partner_2",
      img: defaultIcon,
      link: "website_link",
      alt: "partners_photo",
   },
   {
      id: 3,
      name: "partner_3",
      img: defaultIcon,
      link: "website_link",
      alt: "partners_photo",
   },
   {
      id: 4,
      name: "partner_4",
      img: defaultIcon,
      link: "website_link",
      alt: "partners_photo",
   },
];

export const AdminPartners = () => {
   const { pathname } = useLocation();
   // const { token } = useAdminContext();
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2OTYyNjkwMDgsImV4cCI6MTY5NjI3MjYwOH0.mTnPkQHGfEzqiB9-7GAwPkX-dGqaEhf2Lqg6fCpNkMQ";
//   const { data, isLoading, error } = useLoadingData(() => AdminApi.getPartnersAdmin(token));
//   console.log(data);
//   !isLoading ? console.log(data) : null;
   return (
      <div className="admin-hero">
         <AdminMainHeader title={"Партнери"} previousPage={pathname} />
         <AdminMainInnerPart name="Назва" photo="Фото" link="URL" data={dataPartners} />
      </div>
   );
};
