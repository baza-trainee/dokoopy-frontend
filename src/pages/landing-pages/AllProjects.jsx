import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import defImg from "../../assets/images/default-image.jpg";
import Pagination from "../../components/Pagination.jsx";
import { Contacts } from "../../components/sections/Contacts.jsx";
export const AllProjects = () => {
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
   const [searchParams, setSearchParams] = useSearchParams();
   const [projectData, setProjectData] = useState([]);
   const [currentPage, setCurrentPage] = useState(+searchParams.get("page") || 1);
   const [currentPosts, setCurrentPost] = useState();
   const postsPerPage = 4;
   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   // const { data, isLoading, eventLoading } = useLoadingData(lendingData.getProject, true);

   // useEffect(() => {
   //    eventLoading();
   // }, []);

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, []);

   useEffect(() => {
      // if (!isLoading) {
      setProjectData(dataFromBackend);
      setCurrentPost(dataFromBackend.slice(firstPostIndex, lastPostIndex));
      // }
      setProjectData(dataFromBackend);
   }, [currentPage]);

   useEffect(() => {
      searchParams.set("page", currentPage);
      setSearchParams(searchParams);
   }, [currentPage]);
   return (
      <>
         <section className="container container-project">
            <h2 className="project-title">Наші проєкти</h2>
            <ul className="project-page-list">
               {currentPosts?.map(item => (
                  <li key={item.id}>
                     <div className="all-project-content">
                        <img
                           className="project-img-blok"
                           // src={`https://dokoopy.onrender.com/${item.imageURL}`}
                           src={defImg}
                        ></img>
                        <div className="text-blok">
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

            <div className="pagination">
               <Pagination
                  totalPosts={dataFromBackend.length}
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
