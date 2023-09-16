
import iconx from '../assets/images/iconx.svg';

export const AdminModal = ({ onClose }) => {
 
  
    return (
      <div className="admin-modal" onClick={handleModalClick}>
      <div className="admin-modal-window">
          <div className="admin-modal-button">
            <button className="admin-button-close">
              <img src={iconx} className="admin-iconx"/>
            </button>
          </div>
         
          </div>
          </div>
    );
  };