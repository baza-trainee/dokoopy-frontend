import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import defImg from "../../assets/images/default-image.jpg";
// import { lendingData } from "../../api/api";
// import { formatData, sortData } from "../../assets/helpers";
// import { useLoadingData } from "../../hook/useLoadingData";
import ProjectSlider from "./ProjectSlider";
export const Projects = () => {
   const [projectsData, setProjectsData] = useState([]);

   // const { data, isLoading } = useLoadingData(lendingData.getProject);

   useEffect(() => {
      // if (data) {
      //    setProjectsData(sortData(data.projects));
      // }

      const dataFromBackend = [
         {
            id: 1,
            imageSrc: "",
            date: "31 серпня 2023",
            title: "Збір на 57 бригаду",
            description:
               "Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо",
            alt: "Зображення проекту 1",
         },
         {
            id: 2,
            imageSrc: "",
            date: "15 серпня 2023",
            title: "Збір на 57 бригаду",
            description:
               "Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо",
            alt: "Зображення проекту 2",
         },
         {
            id: 3,
            imageSrc: "",
            date: "15 серпня 2023",
            title: "Збір на 57 бригаду",
            description: "Ми – 57 бригада та беремо участь у найзапекліших боях. ",
            alt: "Зображення проекту 2",
         },
         {
            id: 4,
            imageSrc: "",
            date: "05 серпня 2023",
            title: "Збір на 57 бригаду",
            description:
               "Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо",
            alt: "Зображення проекту 4",
         },
         {
            id: 5,
            imageSrc: "",
            date: "31 серпня 2023",
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
               {projectsData.slice(0, 4).map(project => (
                  <li key={project.id} className="project-cart">
                     <img
                        className="projects-block-box-img"
                        // src={`https://dokoopy.onrender.com/${project.imageURL}`}
                        src={defImg}
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
