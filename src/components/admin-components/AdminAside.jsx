import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { useAppContext } from "../provider-components/app-provider";
import { AsideListItem } from "./aside-components/AsideListItem";

import { AdminSliderIcon } from "../../assets/admin-icons/admin-slider";
import { AdminProjectsIcon } from "../../assets/admin-icons/admin-projects";
import { AdminPartnersIcon } from "../../assets/admin-icons/admin-partners";
import { AdminContactsIcon } from "../../assets/admin-icons/admin-contacts";
import { AdminBankIcon } from "../../assets/admin-icons/admin-bank";
import { AdminReportIcon } from "../../assets/admin-icons/admin-report";
import { AdminChangePasswordIcon } from "../../assets/admin-icons/admin-password";
import { AdminLogoutIcon } from "../../assets/admin-icons/admin-logout";

export const AdminAside = () => {
   const asideTitles = [
      { name: "Слайдер", icon: AdminSliderIcon, link: "/admin" },
      { name: "Проєкти", icon: AdminProjectsIcon, link: "projects" },
      { name: "Партнери", icon: AdminPartnersIcon, link: "partners" },
      { name: "Контакти", icon: AdminContactsIcon, link: "contacts" },
      { name: "Банківські реквізити", icon: AdminBankIcon, link: "bank-account" },
      { name: "Звітність", icon: AdminReportIcon, link: "reporting" },
      { name: "Зміна пароля", icon: AdminChangePasswordIcon, link: "change-password" },
   ];

   const { logOff } = useAppContext();

   const { pathname } = useLocation();
   const [isActive, setIsActive] = useState(getCurrentLocation());

   function getCurrentLocation() {
      const currentLocation = pathname.split("/");
      if (
         !currentLocation[2] ||
         currentLocation[2] === "edit" ||
         currentLocation[2] === "add-new-slide"
      ) {
         return asideTitles[0];
      }
      const page = currentLocation[2];
      const currentPage = asideTitles.find(element => {
         return element.link === page;
      });
      return currentPage;
   }

   return (
      <aside className="aside">
         <ul>
            {asideTitles.map((element, index) => {
               return (
                  <li
                     key={index}
                     onClick={() => {
                        setIsActive(element);
                     }}
                     className="admin-list-item"
                  >
                     <AsideListItem
                        title={element.name}
                        link={element.link}
                        style={
                           isActive.name === element?.name
                              ? "admin-list-link admin-list-link_active"
                              : "admin-list-link"
                        }
                     >
                        <div className="admin-list-icon">
                           <element.icon />
                        </div>
                     </AsideListItem>
                  </li>
               );
            })}
         </ul>
         <Link to="/login" onClick={logOff} className="admin-logout">
            <div className="admin-list-icon">
               <AdminLogoutIcon />
            </div>
            Вийти
         </Link>
      </aside>
   );
};

{
   /* <div className="admin-list-icon">
<AdminSliderIcon />
</div>
<Link to="/admin">Слайдер</Link> */
}

{
   /* <aside className="aside">
         <ul>
            <li className="admin-list-item">
               <AsideListItem title={asideTitles.slider}>
                  <div className="admin-list-icon">
                     <AdminSliderIcon />
                  </div>
               </AsideListItem>
            </li>
            <li className="admin-list-item">
               <div className="admin-list-icon">
                  <AdminProjectsIcon />
               </div>
               <Link to="projects">Проєкти</Link>
            </li>
            <li className="admin-list-item">
               <div className="admin-list-icon">
                  <AdminPartnersIcon />
               </div>
               <Link to="partners">Партнери</Link>
            </li>
            <li className="admin-list-item">
               <div className="admin-list-icon">
                  <AdminContactsIcon />
               </div>
               <Link to="contacts">Контакти</Link>
            </li>
            <li className="admin-list-item">
               <div className="admin-list-icon">
                  <AdminBankIcon />
               </div>
               <Link to="bank-account">
                  <span className="bank-account-text">Банківські реквізити</span>
               </Link>
            </li>
            <li className="admin-list-item">
               <div className="admin-list-icon">
                  <AdminReportIcon />
               </div>
               <Link to="reporting">Звітність</Link>
            </li>
            <li className="admin-list-item">
               <div className="admin-list-icon">
                  <AdminChangePasswordIcon />
               </div>
               <Link to="change-password">Зміна пароля</Link>
            </li>
         </ul>
         <Link to="/login" className="admin-logout">
            <div className="admin-list-icon">
               <AdminLogoutIcon />
            </div>
            Вийти
         </Link>
      </aside> */
}

{
   /* <AsideListItem title={asideTitles.slider}>
               <div className="admin-list-icon">
                  <AdminSliderIcon />
               </div>
            </AsideListItem>
            <AsideListItem title={asideTitles.projects}>
               <div className="admin-list-icon">
                  <AdminProjectsIcon />
               </div>
            </AsideListItem>
            <AsideListItem title={asideTitles.partners}>
               <div className="admin-list-icon">
                  <AdminPartnersIcon />
               </div>
            </AsideListItem>
            <AsideListItem title={asideTitles.contacts}>
               <div className="admin-list-icon">
                  <AdminContactsIcon />
               </div>
            </AsideListItem>
            <AsideListItem title={asideTitles.bankAccount}>
               <div className="admin-list-icon">
                  <AdminBankIcon />
               </div>
            </AsideListItem>
            <AsideListItem title={asideTitles.report}>
               <div className="admin-list-icon">
                  <AdminReportIcon />
               </div>
            </AsideListItem>
            <AsideListItem title={asideTitles.report}>
               <div className="admin-list-icon">
                  <AdminChangePasswordIcon />
               </div>
            </AsideListItem> */
}
