import { useEffect, useState } from "react";
import { data } from "../assets/mockProject/mockDataProjects.js";
import { ProjectCart } from "../components/ProjectCart";

export const AllProjects = () => {
   const [projectData, setProjectData] = useState([]);
   const [firstEl, setFirstEl] = useState(0);
   const [lastEl, setLastEl] = useState(4);

   useEffect(() => {
      setProjectData(data.slice(firstEl, lastEl));
   }, [firstEl]);

   const prevPage = () => {
      if (firstEl > 3) {
         window.scrollTo(0, 0);
         setFirstEl(prev => prev - 4);
         setLastEl(prev => prev - 4);
      }
   };
   const nextPage = () => {
      if (lastEl < data.length) {
         window.scrollTo(0, 0);
         setFirstEl(prev => prev + 4);
         setLastEl(prev => prev + 4);
      }
   };
   return (
      <section className="container container-project">
         <h2 className="project-title">Наші проєкти</h2>
         {projectData.map(item => (
            <ProjectCart {...item} />
         ))}
         <div className="pagination">
            <div onClick={prevPage} className="pagination-text">
               Назад
            </div>
            <div className="numbersProjectPage"></div>
            <div onClick={nextPage} className="pagination-text">
               Вперед
            </div>
         </div>
      </section>
   );
};
