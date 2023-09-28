import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { AdminAddIcon } from "../../assets/icon/AdminAddIcon";
import { useState } from "react";
import { AdminAddIconFocus } from "../../assets/icon/AdminAddIconFocus";

export const AdminMainHeader = ({ title, previousPage }) => {
   const [isFocused, setIsFocused] = useState(false);

   const redirectToAddNew = () => {
      switch (previousPage) {
         case "/admin":
            return "add-new-slide";
         case "/admin/projects":
            return "add-new-project";
         case "/admin/partners":
            return "add-new-partner";
      }
   };

   const handleMouseEnter = () => {
      setIsFocused(true);
   };

   const handleMouseLeave = () => {
      setIsFocused(false);
   };

   return (
      <div className="admin-hero-header">
         <div className="admin-hero-header-wrapper">
            <h2 className="admin-sub-title">{title}</h2>
            <div
               className="admin-hero-add-icon-box"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
            >
               <Link to={redirectToAddNew()}>
                  {isFocused ? <AdminAddIconFocus /> : <AdminAddIcon />}
                  <p>Add</p>
               </Link>
            </div>
         </div>
      </div>
   );
};
AdminMainHeader.propTypes = {
   title: PropTypes.string,
};
