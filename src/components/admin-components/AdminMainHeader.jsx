import PropTypes from 'prop-types';
import { AdminAddIcon } from '../../assets/icon/AdminAddIcon';
import { AdminArrowIcon } from '../../assets/admin-icons/admin-arrow';

export const AdminMainHeader = ({title}) => {
    return (
        <div className="admin-hero-header">
        <div className="admin-hero-header-wrapper">
          <div className="admin-hero-header-title-box">
            <div className="admin-hero-header-arrow-box">
              <AdminArrowIcon />
            </div>
            <h2 className="admin-hero-header-title">{title}</h2>
          </div>
        <div className="admin-hero-add-icon-box">
        <div className="admin-hero-add-icon-wrapper">
          <AdminAddIcon />
        </div>
        
            <p>Add</p>
        </div>
        </div>
        </div>
    );
}
AdminMainHeader.propTypes = {
    title: PropTypes.string,
}