import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import localization from "../../assets/language-switcher/localization";

import { lendingData } from "../../api/api";
import { formatData, formatDataEN } from "../../assets/helpers";
import { useLoadingData } from "../../hook/useLoadingData";

import { useAppContext } from "../provider-components/app-provider";
import ProjectSlider from "./ProjectSlider";

export const Projects = () => {
   const { language } = useAppContext();
   const [project, setProject] = useState([]);
   const { isLoading, error, data } = useLoadingData(lendingData.getProject);

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

   return (
      <div className="projects">
         <div className="container">
            <h2 className="title   title-dark">{localization.projects.title}</h2>
            <ul className="projects-block-desktop">
               {project?.slice(0, 4).map(project => (
                  <li key={project._id} className="project-cart">
                     <img
                        className="projects-block-box-img"
                        src={project.imageURL}
                        alt={project.title}
                     />

                     <p className="project-data">{project.date}</p>
                     <p className="project-cart-title">{project.title}</p>

                     <p className="project-cart-description">{project.description}</p>
                  </li>
               ))}
            </ul>
         </div>
         <ul className="slider-project">
            <ProjectSlider data={project} />
         </ul>
         {4 < project.length && (
            <Link to="allprojects/1" className="link-more-project">
               <div
                  onClick={() => {
                     window.scrollTo({
                        top: 0,
                     });
                  }}
                  className="projects-btn"
               >
                  {localization.projects.button}
               </div>
            </Link>
         )}
      </div>
   );
};
