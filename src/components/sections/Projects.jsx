import { useState, useEffect } from 'react';

export const Projects = () => {
   const [projectsData, setProjectsData] = useState([]);
   const [visibleProjects, setVisibleProjects] = useState(4);

   useEffect(() => {      
      // Приклад даних з бекенду:
      const dataFromBackend = [
         {
            id: 1,
            imageSrc: '',
            date: '31 серпня, 2023',            
            title: 'Збір на 57 бригаду',
            description: 'Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо',
            alt: 'Зображення проекту 1',
         },
         {
            id: 2,
            imageSrc: '',
            date: '15 серпня, 2023',
            title: 'Збір на 57 бригаду',
            description: 'Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо',
            alt: 'Зображення проекту 2',
         },
         {
            id: 3,
            imageSrc: '',
            date: '15 серпня, 2023',
            title: 'Збір на 57 бригаду',
            title: 'Збір на 57 бригаду',
            description: 'Ми – 57 бригада та беремо участь у найзапекліших боях. ',
            alt: 'Зображення проекту 2',
         },
         {
            id: 4,
            imageSrc: '',
            date: '05 серпня, 2023',
            title: 'Збір на 57 бригаду',
            description: 'Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо',
            alt: 'Зображення проекту 4',
         },
         {
            id: 5,
            imageSrc: '',
            date: '31 серпня, 2023',
            title: 'Збір на 57 бригаду',
            description: 'Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо',
            alt: 'Зображення проекту 5',
         },
      ];

      setProjectsData(dataFromBackend);
   }, []);

   const showMoreProjects = () => {
      setVisibleProjects(visibleProjects + 4);
   };

   return (
      <div className="projects">
         <div className="container projects-container">
            <h2 className="title title-dark">Наші проєкти</h2>
            <ul className="projects-block">
               {projectsData.slice(0, visibleProjects).map((project) => (
                  <li key={project.id} className="projects-block-box">
                     <img
                        className="projects-block-box-img"
                        src={project.imageSrc || 'default-image.jpg'} // Зображення за замовчуванням
                        alt={project.alt}
                        width="292" 
                        height="384" 
                     />
                     <div className="projects-block-box-date-title">
                        <p className="projects-block-box-date">{project.date}</p>
                        <p className="projects-block-box-title">{project.title}</p>
                     </div>
                     <p className="projects-block-box-description">{project.description}</p>                     
               </li>
               ))}
            </ul>
            {visibleProjects < projectsData.length && (
               <a href="#" className="projects-btn" onClick={showMoreProjects}>
                  Більше проєктів
               </a>
            )}
         </div>
      </div>
   );
};