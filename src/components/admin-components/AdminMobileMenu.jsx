import { useEffect } from "react";

import { Link } from "react-router-dom";

import { useAppContext } from "../provider-components/app-provider";

import { CloseModal } from "../../assets/icon/close-modal";
import { AdminSliderIcon } from "../../assets/admin-icons/admin-slider";
import { AdminProjectsIcon } from "../../assets/admin-icons/admin-projects";
import { AdminPartnersIcon } from "../../assets/admin-icons/admin-partners";
import { AdminContactsIcon } from "../../assets/admin-icons/admin-contacts";
import { AdminBankIcon } from "../../assets/admin-icons/admin-bank";
import { AdminReportIcon } from "../../assets/admin-icons/admin-report";
import { AdminChangePasswordIcon } from "../../assets/admin-icons/admin-password";
import { AdminLogoutIcon } from "../../assets/admin-icons/admin-logout";

export const AdminMobileMenu = ({ openMenu }) => {
   const { logOff } = useAppContext();

   useEffect(() => {
      window.addEventListener("keydown", handleKeyPress);

      return () => {
         window.removeEventListener("keydown", handleKeyPress);
      };
   }, []);

   function handleKeyPress(event) {
      if (event.key === "Escape") {
         openMenu();
      }
   }

   function onBackdropHandler(event) {
      if (event.currentTarget === event.target) {
         openMenu();
      }
   }

   function logOffHandler() {
      logOff;
      openMenu();
   }

   return (
      <div onClick={onBackdropHandler} className="mobile-admin-backdrop">
         <div className="admin-mobile-menu-wrapper">
            <div onClick={openMenu} className="admin-mobile-close-icon">
               <CloseModal />
            </div>
            <ul onClick={openMenu}>
               <li className="admin-mobile-list-item">
                  <div className="admin-mobile-list-icon">
                     <AdminSliderIcon />
                  </div>
                  <Link to="/admin">Слайдер</Link>
               </li>
               <li className="admin-mobile-list-item">
                  <div className="admin-mobile-list-icon">
                     <AdminProjectsIcon />
                  </div>
                  <Link to="projects">Проєкти</Link>
               </li>
               <li className="admin-mobile-list-item">
                  <div className="admin-mobile-list-icon">
                     <AdminPartnersIcon />
                  </div>
                  <Link to="partners">Партнери</Link>
               </li>
               <li className="admin-mobile-list-item">
                  <div className="admin-mobile-list-icon">
                     <AdminContactsIcon />
                  </div>
                  <Link to="contacts">Контакти</Link>
               </li>
               <li className="admin-mobile-list-item">
                  <div className="admin-mobile-list-icon">
                     <AdminBankIcon />
                  </div>
                  <Link to="bank-account">Банківські реквізити</Link>
               </li>
               <li className="admin-mobile-list-item">
                  <div className="admin-mobile-list-icon">
                     <AdminReportIcon />
                  </div>
                  <Link to="reporting">Звітність</Link>
               </li>
               <li className="admin-mobile-list-item">
                  <div className="admin-mobile-list-icon">
                     <AdminChangePasswordIcon />
                  </div>
                  <Link to="change-password">Зміна пароля</Link>
               </li>
            </ul>
            <Link to="/login" onClick={logOffHandler} className="admin-mobile-logout">
               <div className="admin-mobile-list-icon">
                  <AdminLogoutIcon />
               </div>
               Вийти
            </Link>
         </div>
      </div>
   );
};
