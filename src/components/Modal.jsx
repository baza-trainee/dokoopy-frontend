import React from "react";
import check from "../assets/Frame35020.png";
import close from "../assets/x.png";



export const Modal = ({ active, setActive }) => {
   const [modalActive, setModalActive] = React.useState(true)
   return (
      <>
      { modalActive && (
         <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()} >
           
               <div className="content">
                  <button className="modal-btn" onClick={() => setModalActive(false)}>
                     <img src={close}></img>
                  </button>
                  <h2 className="modal-title">Дякуємо за ваш внесок!</h2>
                  <div className="modal-check">
                     <img src={check}></img>
                  </div>
                  <p className="modal-subtitle" >Повернутись на головну</p>
               </div>
            </div>
         </div>
      )};
      </>      
   )
  


};
