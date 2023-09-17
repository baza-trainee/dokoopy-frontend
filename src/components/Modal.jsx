import { useEffect } from 'react';
import iconx from '../assets/images/iconx.svg';
import frameThanks from '../assets/images/frameThanks.svg';
import { Link, useNavigate } from 'react-router-dom';

export const Modal = ({ onClose }) => {
  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

    const navigate = useNavigate();
  
    const goToHomePage = (e) => {
      if (e.target.classList.contains("backpage")){
        navigate('/');
        onClose();
      }
    };


  const handleButtonCloseClick = () => {
    onClose();
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
            <img src={iconx} className="iconx" alt="Close" />
          </button>
        </div>
        <div className="modal-text">
          <h2>Дякуємо за ваш внесок!</h2>
          <img src={frameThanks} className='imgthank' alt="Thanks" />
          <p className="backpage" onClick={goToHomePage} >
            Повернутись на головну
          </p>
        </div>
      </div>
    </div>
  );
};