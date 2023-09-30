import PropTypes from 'prop-types';
import { EditIcon } from "../../assets/icon/EditIcon";
import { useEffect, useRef } from 'react';

export const AdminMainInnerPart = ({name, photo, date, link, data}) => {
   const gridContainerRef = useRef(null);

   useEffect(() => {
      const numberOfRows = data.length;
      if (gridContainerRef.current) {
        gridContainerRef.current.style.gridTemplateRows = `repeat(${numberOfRows}, 1fr)`;
      }
    }, [data]);

    return (
        <div className="admin-main-wrapper">
            <div className="admin-main-header">
               <div className={date ? "admin-main-header-wrapper" : "admin-main-header-partners-wrapper"}>
               <div className="admin-main-header-title">{name}</div>
               <div className="admin-main-header-title">{photo}</div>
               <div className="admin-main-header-title">{date ? date : link}</div>
               <div className="admin-main-header-title"></div>
               </div>
            </div>
            <ul className="admin-main-content" ref={gridContainerRef}> 
               {data.map(contentData => {
                  return (
                     <li key={contentData.id} 
                     className={contentData.date ? "admin-main-content-element" : "admin-main-content-element-partners"}>
                        <p className={contentData.date ? "content-element-name" : "content-element-name-partners"}>
                           {contentData.name}
                        </p>
                        <div className="content-element-img-box">
                           <div className={contentData.date ? "wrapper-img-box" : "wrapper-img-box-svg"}>
                              <img src={contentData.img} alt={contentData.alt}
                              className="content-element-img">
                              </img>
                           </div>
                        </div>
                           <p className={contentData.date ? "content-element-data" : "content-element-link"}>
                              {contentData.date ? contentData.date : contentData.link}
                           </p>

                        <div className="content-edit-icon-box">
                           <div className="wrapper-edit-icon-box">
                           <EditIcon />
                           </div>
                        </div>
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