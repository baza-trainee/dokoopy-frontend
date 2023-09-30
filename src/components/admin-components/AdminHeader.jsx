import { useState } from "react";

import { AdminMobileMenu } from "./AdminMobileMenu";

import { BurgerMenuIcon } from "../../assets/icon/burger-menu";

export const AdminHeader = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   function openMenu() {
      setMenuOpen(!menuOpen);
   }

   return (
      <header className="admin-header">
         <h1 className="admin-title">Збір для 57 бригади</h1>
         <div onClick={openMenu} className="admin-mobile-menu">
            <BurgerMenuIcon />
         </div>
         {menuOpen ? <AdminMobileMenu openMenu={openMenu} /> : null}
      </header>
   );
};

{
   /* <div className="admin-card">
<div className="admin-icon">
   <AdminIcon />
</div>
<p className="admin-name">Admin</p>
<div>
   <ChevronDown />
</div>
</div> */
}
