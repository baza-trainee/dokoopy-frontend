import PropTypes from 'prop-types';
import { EditIcon } from "../../assets/icon/EditIcon";

export const AdminMainInnerPart = ({name, photo, date, link, data}) => {
    return (
        <div className="admin-main-wrapper">
            <div className="admin-main-header">
               <div className="admin-main-header-wrapper">
               <div className="admin-main-header-title">{name}</div>
               <div className="admin-main-header-title">{photo}</div>
               <div className="admin-main-header-title">{date ? date : link}</div>
               <div className="admin-main-header-title"></div>
               </div>
            </div>
            <ul className="admin-main-content"> 
               {data.map(contentData => {
                  return (
                     <li key={contentData.id} className="admin-main-content-element">
                        {/* <div className="content-element-wrapper"> */}
                        <p className="content-element-name">{contentData.name}</p>
                        <div className="content-element-img-box">
                           <div className={contentData.date ? "wrapper-img-box" : "wrapper-img-box-svg"}>
                              <img src={contentData.img} alt={contentData.alt}
                              className="content-element-img">
                              </img>
                           </div>
                        </div>
                        <p className="content-element-data">{contentData.date ? contentData.date : contentData.link}</p>
                        <div className="content-edit-icon-box">
                           <div className="wrapper-edit-icon-box">
                           <EditIcon />
                           </div>
                        </div>
                        {/* </div> */}
                     </li>
                  );
               })}
            </ul>
         </div>
    );
}
AdminMainInnerPart.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    date: PropTypes.string,
    link: PropTypes.string,
    data: PropTypes.array,

}