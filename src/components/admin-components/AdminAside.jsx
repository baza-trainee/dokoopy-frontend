import { Link } from "react-router-dom";

import { AdminSliderIcon } from "../../assets/admin-icons/admin-slider";
import { AdminProjectsIcon } from "../../assets/admin-icons/admin-projects";
import { AdminPartnersIcon } from "../../assets/admin-icons/admin-partners";
import { AdminContactsIcon } from "../../assets/admin-icons/admin-contacts";
import { AdminBankIcon } from "../../assets/admin-icons/admin-bank";
import { AdminReportIcon } from "../../assets/admin-icons/admin-report";

export const AdminAside = () => {
   return (
      <aside className="aside">
         <ul>
            <li className="admin-list-item">
               <div className="admin-list-icon">
                  <AdminSliderIcon />
               </div>
               <Link to="/admin">Hero</Link>
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
               <Link to="bank-account">Банківські реквізити</Link>
            </li>
            <li className="admin-list-item">
               <div className="admin-list-icon">
                  <AdminReportIcon />
               </div>
               <Link to="reporting">Звітність</Link>
            </li>
         </ul>
         <button type="button">close</button>
      </aside>
   );
};
