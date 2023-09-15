import { useEffect } from 'react';
import iconx from '../assets/images/iconx.svg';
import frameThanks from '../assets/images/frameThanks.svg';


export const Modal = ({ onClose }) => {
  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  const handleButtonCloseClick = () => {
    onClose();
  };

  const handleParagrafClick = (e) => {
    if (e.target.classList.contains("backpage")) {
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="modal" onClick={handleModalClick}>
    <div className="modal-window">
        <div className="modal-button">
          <button className="button-close" onClick={handleButtonCloseClick}>
            <img src={iconx} className="iconx"/>
          </button>
        </div>
        <div className="modal-text">
          <h2>Дякуємо за ваш внесок!</h2>
          <img src={frameThanks} className='imgthank'/>
          <p className="backpage" onClick={handleParagrafClick}>
            Повернутись на головну
          </p>
        </div>
        </div>
    </div>
  );
};

