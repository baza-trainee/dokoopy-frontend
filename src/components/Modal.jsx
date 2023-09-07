import React from "react";




export const Modal = ({ active, setActive, children }) => {
   return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
         <div className="modal-content" onClick={e => e.stopPropagation()} >{children}</div>
     
         
      </div>
   )
  


};
