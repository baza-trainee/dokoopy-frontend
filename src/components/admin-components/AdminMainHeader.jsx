import PropTypes from 'prop-types';

export const AdminMainHeader = ({title}) => {
    return (
        <div className="admin-hero-header">
        <div className="admin-hero-header-wrapper">
          <h3 className="admin-hero-title">{title}</h3>
        <div className="admin-hero-add-icon-box">
        <div className="admin-hero-add-icon"></div>
        </div>
        </div>
        </div>
    );
}
AdminMainHeader.propTypes = {
    title: PropTypes.string,
}