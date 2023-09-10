import React from "react";
import arrow from "../assets/arrow.svg";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
   let pages = [];
   const pageCounter = Math.ceil(totalPosts / postsPerPage);

   for (let i = 1; i <= pageCounter; i++) {
      pages.push(i);
   }
   const prevPage = () => {
      if (currentPage > 1) {
         window.scrollTo({
            top: 0,
            behavior: "smooth",
         });
         setCurrentPage(prev => prev - 1);
      }
   };

   const nextPage = () => {
      if (currentPage < pageCounter) {
         window.scrollTo({
            top: 0,
            behavior: "smooth",
         });
         setCurrentPage(prev => prev + 1);
      }
   };

   const goCurrentPage = page => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
      setCurrentPage(page);
   };

   return (
      <div className="pagination">
         <div className="pagination-arrow">
            <button onClick={prevPage}>
               <img src={arrow} />
            </button>
         </div>
         <div className="numbersProjectPage">
            {pages.map((page, index) => {
               return (
                  <button
                     key={index}
                     onClick={() => goCurrentPage(page)}
                     className={page == currentPage ? "active " : "hover"}
                  >
                     {page}
                  </button>
               );
            })}
         </div>
         <div className="pagination-arrow arrow-rotate ">
            <button onClick={nextPage}>
               <img src={arrow} />
            </button>
         </div>
      </div>
   );
};

export default Pagination;
