import React from "react";
import arrowLeft from "../assets/icon/arrow-left-icon.svg";
import arrowRight from "../assets/icon/arrow-right-icon.svg";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
   let pages = [];
   const pageCounter = Math.ceil(totalPosts / postsPerPage);

   for (let i = 1; i <= pageCounter; i++) {
      pages.push(i);
   }

   const scrollToUp = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };
   const prevPage = () => {
      if (currentPage > 1) {
         scrollToUp();
         setCurrentPage(prev => prev - 1);
      }
   };

   const nextPage = () => {
      if (currentPage < pageCounter) {
         scrollToUp();
         setCurrentPage(prev => prev + 1);
      }
   };

   const goCurrentPage = page => {
      scrollToUp();
      setCurrentPage(page);
   };

   return (
      <div className="pagination">
         <div>
            <button className="pagination-arrow" onClick={prevPage}>
               <img src={arrowLeft} />
            </button>
         </div>
         <div className="pagination-numbers">
            {pages.map((page, index) => {
               return (
                  <button
                     key={index}
                     onClick={() => goCurrentPage(page)}
                     className={page == currentPage ? "active " : ""}
                  >
                     {page}
                  </button>
               );
            })}
         </div>
         <div>
            <button className="pagination-arrow" onClick={nextPage}>
               <img src={arrowRight} />
            </button>
         </div>
      </div>
   );
};

export default Pagination;
