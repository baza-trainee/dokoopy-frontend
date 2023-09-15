import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { data } from "../../assets/mockProject/mockDataProjects.js";
import Pagination from "../../components/Pagination.jsx";

import { Contacts } from "../../components/sections/Contacts.jsx";

export const AllProjects = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [projectData, setProjectData] = useState([]);
   const [currentPage, setCurrentPage] = useState(+searchParams.get("page") || 1);

   const postsPerPage = 4;
   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   const currentPosts = projectData.slice(firstPostIndex, lastPostIndex);

   useEffect(() => {
      setProjectData(data);
   }, []);
   useEffect(() => {
      searchParams.set("page", currentPage);
      setSearchParams(searchParams);
   }, [currentPage]);

   return (
      <>
         <section className="container container-project">
            <h2 className="project-title">Наші проєкти</h2>
            <ul className="project-page-list">
               {currentPosts.map(item => (
                  <li key={item.id}>
                     <div className="content">
                        <img className="project-img-blok" src={item.src}></img>
                        <div className="text-blok">
                           <div className="page-data-title-blok">
                              <p className="project-data">{item.data}</p>
                              <h3 className="page-project-cart-title">{item.title}</h3>
                           </div>
                           <p className="project-description">{item.description}</p>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>

            <div className="pagination">
               <Pagination
                  totalPosts={projectData.length}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
               />
            </div>
         </section>
         <Contacts></Contacts>
      </>
   );
};
