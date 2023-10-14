import PropTypes from "prop-types";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AdminEditIcon } from "../../assets/admin-icons/admin-edit";
import { formatData } from "../../assets/helpers";

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
            <div className="admin-main-header-wrapper">
               <div className="admin-main-header-title">{name}</div>
               <div className="admin-main-header-title">{photo}</div>
               <div className="admin-main-header-title">{date ? date : link}</div>
               <div className="admin-main-header-title"></div>
            </div>
         </div>
         <ul className="admin-main-content" ref={gridContainerRef}>
            {data.map((contentData, index) => {
               return (
                  <li key={contentData._id}>
                     <Link
                        to={`edit/${contentData._id}`}
                        state={{ item: contentData, minLength: data.length }}
                        className={
                           contentData.date
                              ? "admin-main-content-element"
                              : "admin-main-content-element-partners"
                        }
                     >
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
                              className={
                                 contentData.date ? "wrapper-img-box" : "wrapper-img-box-svg"
                              }
                           >
                              <img
                                 src={contentData.imageURL}
                                 alt={"logo"}
                                 className="content-element-img"
                              ></img>
                           </div>
                        </div>
                        <p
                           className={
                              contentData.createdAt ? "content-element-data" : "content-element-link"
                           }
                        >
                           {contentData.createdAt ? formatData(contentData.createdAt) : contentData.link}
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
