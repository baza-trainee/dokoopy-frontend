import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { lendingData } from "../../api/api";
import { formatData, sortData } from "../../assets/helpers";
import { useLoadingData } from "../../hook/useLoadingData";
import ProjectSlider from "./ProjectSlider";
export const Projects = () => {
   const [projectsData, setProjectsData] = useState([]);
   const { data, isLoading } = useLoadingData(lendingData.getProject);
   useEffect(() => {
      if (!isLoading) {
         setProjectsData(sortData(data.projects));
      }
   }, [data]);

   return (
      <div className="projects">
         <div className="container">
            <h2 className="title   title-dark">Наші проєкти</h2>
            <ul className="projects-block-desktop">
               {projectsData.slice(0, 4).map(project => (
                  <li key={project.id} className="project-cart">
                     <img
                        className="projects-block-box-img"
                        src={`https://dokoopy.onrender.com/${project.imageURL}`}
                        alt={project.title}
                     />

                     <p className="project-data">{formatData(project.date)}</p>
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
            <div
               onClick={() => {
                  window.scrollTo({
                     top: 0,
                  });
               }}
               className="projects-btn"
            >
               <Link to="allprojects" className="link-more-project">
                  Більше проєктів
               </Link>
            </div>
         )}
      </div>
   );
};
