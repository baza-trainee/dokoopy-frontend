import { useNavigate } from "react-router-dom";
import leftArow from "../../assets/icon/Vector.svg";
import removeIcon from "../../assets/icon/remove-icon.svg";
export default function SubTitle({ title, edit }) {
   const navigate = useNavigate();
   return (
      <div className="sub-title-container">
         <div className="title-icon">
            <img onClick={() => navigate(-1)} src={leftArow}></img>
            <h3 className="admin-sub-title">{title}</h3>
         </div>
         {edit && (
            <button className="remove-btn">
               <div>
                  <p className="remove-btn-text">Видалити</p>
                  <img src={removeIcon}></img>
               </div>
            </button>
         )}
      </div>
   );
}
