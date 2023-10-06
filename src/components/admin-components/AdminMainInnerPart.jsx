import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { AdminEditIcon } from "../../assets/admin-icons/admin-edit";
import { useEffect, useRef } from "react";

export const AdminMainInnerPart = ({ name, photo, date, link, data }) => {
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
            <div className="admin-main-header-wrapper"
            >
               <div className="admin-main-header-title">{name}</div>
               <div className="admin-main-header-title">{photo}</div>
               <div className="admin-main-header-title">{date ? date : link}</div>
               <div className="admin-main-header-title"></div>
            </div>
         </div>
         <ul className="admin-main-content" ref={gridContainerRef}>
            {/* {!isLoading && (heroes.heroes.map(contentData => { */}
            {data.map(contentData => {
               return (
                  <li
                     key={contentData.id}
                     
                  >
                     <Link to={`edit/${contentData.id}`} className={
                        contentData.date
                           ? "admin-main-content-element"
                           : "admin-main-content-element-partners"
                     }>
                     <p
                        className={
                           contentData.date
                              ? "content-element-name"
                              : "content-element-name-partners"
                        }
                     >
                        {contentData.title}
                     </p>
                     <div className="content-element-img-box">
                        <div
                           className={contentData.date ? "wrapper-img-box" : "wrapper-img-box-svg"}
                        >
                           <img
                              src={contentData.img}
                              alt={contentData.alt}
                              className="content-element-img"
                           ></img>
                        </div>
                     </div>
                     <p
                        className={
                           contentData.date ? "content-element-data" : "content-element-link"
                        }
                     >
                        {contentData.date ? contentData.date : contentData.link}
                     </p>
                     <div>
                        <AdminEditIcon />
                     </div>
                     </Link>
                  </li>
                  
               );
            })}
         </ul>
      </div>
   );
};
AdminMainInnerPart.propTypes = {
   name: PropTypes.string,
   photo: PropTypes.string,
   date: PropTypes.string,
   link: PropTypes.string,
   data: PropTypes.array,
};
{/* <Link to={`edit/${contentData.id}`}></Link> */}