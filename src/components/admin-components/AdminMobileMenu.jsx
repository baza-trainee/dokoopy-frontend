import { Link } from "react-router-dom";

import { CloseModal } from "../../assets/icon/close-modal";
import { AdminSliderIcon } from "../../assets/admin-icons/admin-slider";
import { AdminProjectsIcon } from "../../assets/admin-icons/admin-projects";
import { AdminPartnersIcon } from "../../assets/admin-icons/admin-partners";
import { AdminContactsIcon } from "../../assets/admin-icons/admin-contacts";
import { AdminBankIcon } from "../../assets/admin-icons/admin-bank";
import { AdminReportIcon } from "../../assets/admin-icons/admin-report";
import { AdminChangePasswordIcon } from "../../assets/admin-icons/admin-password";
import { AdminLogoutIcon } from "../../assets/admin-icons/admin-logout";

export const AdminMobileMenu = () => {
   return (
      <div className="admin-mobile-menu-wrapper">
         <div className="admin-mobile-close-icon">
            <CloseModal />
         </div>
         <ul>
            <li className="admin-mobile-list-item">
               <div className="admin-mobile-list-icon">
                  <AdminSliderIcon />
               </div>
               <Link to="/admin">Hero</Link>
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
               <Link to="reporting">Зміна пароля</Link>
            </li>
         </ul>
         <Link to="/admin" className="admin-mobile-logout">
            <div className="admin-mobile-list-icon">
               <AdminLogoutIcon />
            </div>
            Вийти
         </Link>
      </div>
   );
};
