import PropTypes from 'prop-types';
import { AdminAddIcon } from '../../assets/icon/AdminAddIcon';
import { useState } from 'react';
import { AdminAddIconFocus } from '../../assets/icon/AdminAddIconFocus';

export const AdminMainHeader = ({title}) => {
    const [isFocused, setIsFocused] = useState(false);

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
        <div className="admin-hero-add-icon-box"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        {isFocused ? <AdminAddIconFocus /> : <AdminAddIcon />}
            <p>Add</p>
        </div>
        </div>
        </div>
    );
}
AdminMainHeader.propTypes = {
    title: PropTypes.string,
}