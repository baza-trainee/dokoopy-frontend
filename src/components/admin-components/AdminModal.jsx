import iconx from '../assets/images/iconx.svg';


export const AdminModal = () => {

  return (
    <div className="admin-modal">
    <div className="admin-modal-window">
        <div className="admin-modal-button">
          <button className="admin-button-close">
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