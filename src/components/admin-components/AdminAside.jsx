import { Link } from "react-router-dom";
// import { useAdminContext } from "../provider-components/admin-provider";
import { useAppContext } from "../provider-components/app-provider";

import { AdminSliderIcon } from "../../assets/admin-icons/admin-slider";
import { AdminProjectsIcon } from "../../assets/admin-icons/admin-projects";
import { AdminPartnersIcon } from "../../assets/admin-icons/admin-partners";
import { AdminContactsIcon } from "../../assets/admin-icons/admin-contacts";
import { AdminBankIcon } from "../../assets/admin-icons/admin-bank";
import { AdminReportIcon } from "../../assets/admin-icons/admin-report";
import { AdminChangePasswordIcon } from "../../assets/admin-icons/admin-password";
import { AdminLogoutIcon } from "../../assets/admin-icons/admin-logout";

export const AdminAside = () => {
   const { loggedIn } = useAppContext();
   console.log(loggedIn);
   return (
      <aside className="aside">
         <ul>
            <li className="admin-list-item">
               <div className="admin-list-icon">
                  <AdminSliderIcon />
               </div>
               <Link to="/admin">Слайдер</Link>
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
         <Link to="/admin" className="admin-logout">
            <div className="admin-list-icon">
               <AdminLogoutIcon />
            </div>
            Вийти
         </Link>
      </aside>
   );
};
