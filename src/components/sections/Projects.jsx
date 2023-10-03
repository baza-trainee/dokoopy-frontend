import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import localization from "../../assets/language-switcher/localization";

import defImg from "../../assets/images/default-image.jpg";

import { lendingData } from "../../api/api";
import { formatData, sortData } from "../../assets/helpers";
import { useLoadingData } from "../../hook/useLoadingData";

import ProjectSlider from "./ProjectSlider";

export const Projects = () => {
   const { data, error, isLoading, eventLoading } = useLoadingData(lendingData.getProject);

   useEffect(() => {
      if (error) {
         console.error(error);
      }
      
      if (data) {         
         setProjectsData(sortData(data.projects));
         console.log(data); 
      }

   }, [data, error]);

   const [projectsData, setProjectsData] = useState([]);

   return (
      <div className="projects">
         <div className="container">
            <h2 className="title   title-dark">{localization.projects.title}</h2>
            <ul className="projects-block-desktop">
               {projectsData.slice(0, 4).map(project => (
                  <li key={project.id} className="project-cart">
                     <img
                        className="projects-block-box-img"
                        src={`https://dokoopy.onrender.com/${project.imageURL}` || defImg }
                       
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
            <ProjectSlider data={projectsData} />
         </ul>
         {4 < projectsData.length && (
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
