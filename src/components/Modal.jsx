import close from '../../public/images/x.svg';
import thank from '../../public/images/frame-thank.svg';
export const Modal = ({ onClose }) =>{  


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


   return(
       <div className="modal" onClick={handleModalClick}>
           <div className="modal-window">
               <div className="modal-button">
                   <button className="button-close" onClick={handleButtonCloseClick}><img src={close} alt="Close"/></button>
               </div>    
               <div className="modal-text">
                   <h2>Дякуємо за ваш внесок!</h2>
                   <img className='img-thank' src={thank}/>
                   <p className="backpage" onClick={handleParagrafClick}>Повернутись на головну</p>
               </div>
           </div>
          </div>
   )
}