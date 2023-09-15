import defaultImage from "../../assets/images/default-image.jpg";
import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";
   
   const dataProjects = [
      {
         id: 1,
         name: "Назва блоку",
         img: defaultImage,
         date: "21.07.2023",
         alt: "slider_photo",
      },
      {
         id: 2,
         name: "Назва блоку",
         img: defaultImage,
         date: "21.07.2023",
         alt: "slider_photo",
      },
      {id: 3,
         name: "Назва блоку",
         img: defaultImage,
         date: "21.07.2023",
         alt: "slider_photo",
      },
      {
         id: 4,
         name: "Назва блоку",
         img: defaultImage,
         date: "21.07.2023",
         alt: "slider_photo",
      },
   ];

export const AdminProjects = () => {
   return (
      <div className="admin-hero">
      <AdminMainHeader title={"Проекти"}/>
      <AdminMainInnerPart name="Name" photo="Photo" date="Date" data={dataProjects}/>
         {/* <div className="admin-hero-main">
            <div className="admin-hero-main-header">
               <div className="admin-hero-main-header-wrapper">
               <div className="admin-hero-main-header-title">Name</div>
               <div className="admin-hero-main-header-title">Photo</div>
               <div className="admin-hero-main-header-title">Date</div>
               <div className="admin-hero-main-header-title"></div>
               </div>
            </div>
            <ul className="admin-hero-main-content"> 
               {dataProjects.map(slider => {
                  return (
                     <li key={slider.id} className="admin-hero-main-content-element">
                        <div className="content-element-wrapper">
                        <div className="content-element-name">{slider.name}</div>
                        <div className="content-element-img-box">
                           <div className="wrapper-img-box">
                              <img src={slider.link} alt={slider.alt}
                              className="content-element-img">
                              </img>
                           </div>
                        </div>
                        <div className="content-element-data">{slider.date}</div>
                        <div className="content-edit-icon-box">
                           <div className="wrapper-edit-icon-box">
                              <div className="content-edit-icon"></div>
                           </div>
                        </div>
                        </div>

                     </li>

                  );
               })}
            </ul>
         </div> */}
   </div>
   )
};
