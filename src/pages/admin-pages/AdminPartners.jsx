import { useLocation } from "react-router-dom";

import defaultIcon from "../../assets/icon/baza_trainee.svg";
import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";

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
   return (
      <div className="admin-hero">
         <AdminMainHeader title={"Партнери"} previousPage={pathname} />
         <AdminMainInnerPart name="Name" photo="Photo" link="Link" data={dataPartners} />
         {/* <div className="admin-hero-main">
            <div className="admin-hero-main-header">
               <div className="admin-hero-main-header-wrapper">
               <div className="admin-hero-main-header-title">Name</div>
               <div className="admin-hero-main-header-title">Photo</div>
               <div className="admin-hero-main-header-title">Date</div>
               <div className="admin-hero-main-header-title"></div>
               </div>
            </div>
            <ul className="admin-hero-main-content"> 
               {dataPartners.map(slider => {
                  return (
                     <li key={slider.id} className="admin-hero-main-content-element">
                        <div className="content-element-wrapper">
                        <div className="content-element-name">{slider.name}</div>
                        <div className="content-element-img-box">
                           <div className="wrapper-img-box">
                              <img src={slider.link} alt={slider.alt}
                              className="content-element-img">
                              </img>
                           </div>
                        </div>
                        <div className="content-element-data">{slider.date}</div>
                        <div className="content-edit-icon-box">
                           <div className="wrapper-edit-icon-box">
                              <div className="content-edit-icon"></div>
                           </div>
                        </div>
                        </div>

                     </li>

                  );
               })}
            </ul>
         </div> */}
      </div>
   );
};
