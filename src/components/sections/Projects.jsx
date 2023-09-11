import { useEffect, useState } from "react";
import ProjectSlider from "./ProjectSlider";
export const Projects = () => {
   const [projectsData, setProjectsData] = useState([]);
   const [visibleProjects, setVisibleProjects] = useState(4);

   useEffect(() => {
      const dataFromBackend = [
         {
            id: 1,
            imageSrc: "",
            date: "31 серпня, 2023",
            title: "Збір на 57 бригаду",
            description:
               "Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо",
            alt: "Зображення проекту 1",
         },
         {
            id: 2,
            imageSrc: "",
            date: "15 серпня, 2023",
            title: "Збір на 57 бригаду",
            description:
               "Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо",
            alt: "Зображення проекту 2",
         },
         {
            id: 3,
            imageSrc: "",
            date: "15 серпня, 2023",
            title: "Збір на 57 бригаду",
            description: "Ми – 57 бригада та беремо участь у найзапекліших боях. ",
            alt: "Зображення проекту 2",
         },
         {
            id: 4,
            imageSrc: "",
            date: "05 серпня, 2023",
            title: "Збір на 57 бригаду",
            description:
               "Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо",
            alt: "Зображення проекту 4",
         },
         {
            id: 5,
            imageSrc: "",
            date: "31 серпня, 2023",
            title: "Збір на 57 бригаду",
            description:
               "Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо",
            alt: "Зображення проекту 5",
         },
      ];

      setProjectsData(dataFromBackend);
   }, []);

   return (
      <div className="projects">
         <div className="container">
            <h2 className="title   title-dark">Наші проєкти</h2>
            <ul className="projects-block-desktop">
               {projectsData.slice(0, visibleProjects).map(project => (
                  <li key={project.id} className="project-cart">
                     <img
                        className="projects-block-box-img"
                        src={project.imageSrc || "default-image.jpg"}
                        alt={project.alt}
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
         {visibleProjects < projectsData.length && (
            <div className="projects-btn">
               <a href="allprojects" className="link-more-project">
                  Більше проєктів
               </a>
            </div>
         )}
      </div>
   );
};
