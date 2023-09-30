import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { AdminAddIcon } from "../../assets/icon/AdminAddIcon";
import { AdminArrowIcon } from "../../assets/admin-icons/admin-arrow";

export const AdminMainHeader = ({ title, previousPage }) => {
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

   return (
      <div className="admin-hero-header">
        <div className="admin-hero-header-wrapper">
          <div className="admin-hero-header-title-box">
            <div className="admin-hero-header-arrow-box">
              <AdminArrowIcon />
            </div>
              <h2 className="admin-hero-header-title">{title}</h2>
            </div>
            <Link to={redirectToAddNew()}>
          <div className="admin-hero-add-icon-box">
            {/* <div className="admin-hero-add-icon-wrapper"> */}
              <AdminAddIcon />
            {/* </div>  */}
            <p>Add</p>
          </div>
          </Link>
        </div>
      </div>
   );
};
AdminMainHeader.propTypes = {
   title: PropTypes.string,
};
