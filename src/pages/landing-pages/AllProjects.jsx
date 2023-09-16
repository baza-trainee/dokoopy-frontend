import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination.jsx";

import { lendingData } from "../../api/api.js";
import { Contacts } from "../../components/sections/Contacts.jsx";
import { useLoadingData } from "../../hook/useLoadingData.js";
export const AllProjects = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [projectData, setProjectData] = useState([]);
   const [currentPage, setCurrentPage] = useState(+searchParams.get("page") || 1);
   const [currentPosts, setCurrentPost] = useState();
   const postsPerPage = 4;
   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   const { data, isLoading, eventLoading } = useLoadingData(lendingData.getProject, true);

   useEffect(() => {
      eventLoading();
   }, []);

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, []);

   useEffect(() => {
      if (!isLoading) {
         setProjectData(data.projects);
         setCurrentPost(data.projects.slice(firstPostIndex, lastPostIndex));
      }
      setProjectData(data);
   }, [data, currentPage]);

   useEffect(() => {
      searchParams.set("page", currentPage);
      setSearchParams(searchParams);
   }, [currentPage]);
   console.log(currentPosts);
   return (
      <>
         <section className="container container-project">
            <h2 className="project-title">Наші проєкти</h2>
            <ul className="project-page-list">
               {isLoading ? (
                  <div>loading....</div>
               ) : (
                  currentPosts?.map(item => (
                     <li key={item.id}>
                        <div className="content">
                           <img
                              className="project-img-blok"
                              src={`https://dokoopy.onrender.com/${item.imageURL}`}
                           ></img>
                           <div className="text-blok">
                              <div className="page-data-title-blok">
                                 <p className="project-data">{item.data}</p>
                                 <h3 className="page-project-cart-title">{item.title}</h3>
                              </div>
                              <p className="project-description">{item.description}</p>
                           </div>
                        </div>
                     </li>
                  ))
               )}
            </ul>

            <div className="pagination">
               <Pagination
                  totalPosts={projectData?.projects?.length}
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
