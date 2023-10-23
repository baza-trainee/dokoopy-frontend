import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { lendingData } from "../../api/api";

import { formatData, formatDataEN } from "../../assets/helpers";
import Pagination from "../../components/landing-components/Pagination";
import { useAppContext } from "../../components/provider-components/app-provider";
import { useLoadingData } from "../../hook/useLoadingData";

import { Contacts } from "../../components/sections/Contacts";

import localization from "../../assets/language-switcher/localization";

export const AllProjects = () => {
   const { language } = useAppContext();
   const [project, setProject] = useState([]);
   const { error, data } = useLoadingData(lendingData.getProject);

   useEffect(() => {
      if (data?.projects) {
         setProject(
            data?.projects.map(item => ({
               ...item,
               date: language === "ua" ? formatData(item.createdAt) : formatDataEN(item.createdAt),
               title: language === "ua" ? item.title : item.title_eng,
               description: language === "ua" ? item.description : item.description_eng,
            }))
         );
         if (error) {
            console.error(error);
         }
      }
   }, [data?.projects, language]);

   const { id } = useParams();
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const [currentPage, setCurrentPage] = useState(1);
   const [currentPosts, setCurrentPost] = useState();
   const postsPerPage = 4;
   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;

   useEffect(() => {
      if (project.length) {
         const pageCounter = Math.ceil(project?.length / postsPerPage);
         let numberParam = +id;

         if (numberParam > pageCounter || numberParam <= 0) {
            navigate(`/${numberParam}`);
         }

         if (Number.isNaN(numberParam)) {
            navigate(`/${id}`);
         }

         setCurrentPage(+id);
      }
   }, [id, currentPage, project]);

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0 });
   }, [pathname]);

   useEffect(() => {
      setCurrentPost(project?.slice(firstPostIndex, lastPostIndex));
   }, [currentPage, project]);

   return (
      <>
         <section className="container container-project">
            <h2 className="project-title">{localization.allProjects}</h2>
            <ul className="project-page-list">
               {currentPosts &&
                  currentPosts?.map(item => (
                     <li key={item._id}>
                        <div className="all-project-content">
                           <img className="project-img-blok" src={item.imageURL} />
                           <div className="all-project-text-blok">
                              <div className="page-data-title-blok">
                                 <p className="project-data">{item.date}</p>
                                 <h3 className="page-project-cart-title">{item.title}</h3>
                              </div>
                              <p className="all-project-description">{item.description}</p>
                           </div>
                        </div>
                     </li>
                  ))}
            </ul>

            <Pagination
               totalPosts={project?.length}
               postsPerPage={postsPerPage}
               setCurrentPage={setCurrentPage}
               currentPage={currentPage}
            />
         </section>
         <Contacts></Contacts>
      </>
   );
};
