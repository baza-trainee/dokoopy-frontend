import { useEffect } from 'react';
import iconx from '../assets/images/iconx.svg';


export const AdminModal = ({ onClose }) => {
  const handleAdminModalClick = (e) => {
    if (e.target.classList.contains("admin-modal")) {
      onClose();
    }
  };

  const handleButtonCloseModalClick = () => {
    onClose();
  };

  const handleKeyAdminPress = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyAdminPress);

    return () => {
      window.removeEventListener('keydown', handleKeyAdminPress);
    };
  }, []);

  return (
    <div className="admin-modal" onClick={handleAdminModalClick}>
    <div className="admin-modal-window">
        <div className="admin-modal-button">
          <button className="admin-button-close" onClick={handleButtonCloseModalClick}>
            <img src={iconx} className="iconx"/>
          </button>
        </div>
        <div className="admin-modal-text">
          <h2>Ви впевнені, що хочете видалити проєкт?</h2>
           <div className="-admin-modal-button">
          <button className='admin-modal-no'>Ні</button>
          <button className='admin-modal-yes'>Так</button>
          </div>
        </div>
        </div>
    </div>
  );
};