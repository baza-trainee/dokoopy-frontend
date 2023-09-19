
import { AdminIcon } from "../../assets/admin-icons/admin-icon";
import { ChevronDown } from "../../assets/admin-icons/chevron-down";

export const AdminHeader = () => {
   return (
      <header className="admin-header">
         <h1 className="admin-title">Збір для 57 бригади</h1>
         <div className="admin-card">
            <div className="admin-icon">
               <AdminIcon />
            </div>
            <p className="admin-name">Admin</p>
            <div>
               <ChevronDown />
            </div>
         </div>
      </header>
   );
};
