import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import defImg from "../../assets/images/default-image.jpg";
import photo1 from "../../assets/mockProject/photo_1.jpg";
import photo2 from "../../assets/mockProject/photo_2.png";
import photo3 from "../../assets/mockProject/photo_3.jpg";
import photo4 from "../../assets/mockProject/photo_4.jpg";
import Pagination from "../../components/Pagination.jsx";
import { Contacts } from "../../components/sections/Contacts.jsx";
export const AllProjects = () => {
   const dataFromBackend = [
      {
         id: 1,
         imageSrc: photo1,
         date: "31 серпня 2023",
         title: "Збір на 57 бригаду",
         description:
            "Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо",
         alt: "Зображення проекту 1",
      },
      {
         id: 2,
         imageSrc: photo2,
         date: "15 серпня 2023",
         title: "Збір на 57 бригаду",
         description:
            "Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо",
         alt: "Зображення проекту 2",
      },
      {
         id: 3,
         imageSrc: photo3,
         date: "15 серпня 2023",
         title: "Збір на 57 бригаду",
         description: "Ми – 57 бригада та беремо участь у найзапекліших боях. ",
         alt: "Зображення проекту 2",
      },
      {
         id: 4,
         imageSrc: photo4,
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

   const { id } = useParams();
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const [currentPage, setCurrentPage] = useState(1);
   const [currentPosts, setCurrentPost] = useState();
   const postsPerPage = 4;
   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;

   useEffect(() => {
      const pageCounter = Math.ceil(dataFromBackend.length / postsPerPage);
      let numberParam = +id;

      if (numberParam > pageCounter || numberParam <= 0) {
         navigate(`/${numberParam}`);
      }

      if (Number.isNaN(numberParam)) {
         navigate(`/${id}`);
      }

      setCurrentPage(+id);
   }, [id, currentPage]);

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0 });
   }, [pathname]);

   useEffect(() => {
      setCurrentPost(dataFromBackend.slice(firstPostIndex, lastPostIndex));
   }, [currentPage]);

   return (
      <>
         <section className="container container-project">
            <h2 className="project-title">Наші проєкти</h2>
            <ul className="project-page-list">
               {currentPosts?.map(item => (
                  <li key={item.id}>
                     <div className="all-project-content">
                        <img className="project-img-blok" src={item.imageSrc || defImg}></img>
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
