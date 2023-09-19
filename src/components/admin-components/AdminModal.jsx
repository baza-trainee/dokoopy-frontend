import iconx from "../../assets/images/iconx.svg";

export const AdminModal = ({ onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="admin-modal">
      <div className="admin-modal-window">
        <div className="admin-modal-button-x">
          <button className="admin-button-close" onClick={handleCloseClick}>
            <img src={iconx} className="iconx" alt="Закрити" />
          </button>
        </div>
        <div className="admin-modal-text">
          <h2>Ви впевнені, що хочете<br/>видалити проєкт?</h2>
          <div className="admin-modal-button">
            <button className="admin-modal-no" onClick={handleCloseClick}>
              <h4>Ні</h4>
            </button>
            <button className="admin-modal-yes">
              <h4>Так</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};