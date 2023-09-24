import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/icon/arrow-left-icon.svg";
import arrowRight from "../../assets/icon/arrow-right-icon.svg";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
   let pages = [];

   const pageCounter = Math.ceil(totalPosts / postsPerPage);

   for (let i = 1; i <= pageCounter; i++) {
      pages.push(i);
   }

   const prevPage = () => {
      if (currentPage > 1) {
         setCurrentPage(prev => prev - 1);
      }
   };

   const nextPage = () => {
      if (currentPage < pageCounter) {
         setCurrentPage(prev => prev + 1);
      }
   };

   const goCurrentPage = page => {
      setCurrentPage(page);
   };
   if (totalPosts < postsPerPage) {
      return null;
   }
   return (
      <div className="pagination">
         <div>
            {currentPage > 1 && (
               <Link to={`/allprojects/${currentPage - 1}`}>
                  <button className="pagination-arrow" onClick={prevPage}>
                     <img src={arrowLeft} />
                  </button>
               </Link>
            )}
         </div>
         <div className="pagination-numbers">
            {pages.map((page, index) => {
               return (
                  <Link key={index} to={`/allprojects/${page}`}>
                     <button
                        onClick={() => goCurrentPage(page)}
                        className={page == currentPage ? "active " : ""}
                     >
                        {page}
                     </button>
                  </Link>
               );
            })}
         </div>
         <div>
            {currentPage < pageCounter && (
               <Link to={`/allprojects/${currentPage + 1}`}>
                  <button className="pagination-arrow" onClick={nextPage}>
                     <img src={arrowRight} />
                  </button>
               </Link>
            )}
         </div>
      </div>
   );
};

export default Pagination;
