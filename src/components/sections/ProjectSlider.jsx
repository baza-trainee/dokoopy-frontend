import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function ProjectSlider({ data }) {
   const settings = {
      infinite: true,
      speed: 1000,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
   };
   return (
      <Slider {...settings}>
         {data.slice(0, 4).map(project => (
            <div key={project._id} className="slide-blok">
               <li className="projects-block-box">
                  <img
                     className="projects-img"
                     src={`https://dokoopy.onrender.com/${project.imageURL}`}
                     alt={project.alt}
                  />
                  <div className="data-title-blok">
                     <p className="project-data">{project.date}</p>
                     <p className="project-cart-title">{project.title}</p>
                  </div>
                  <p className="project-cart-description">{project.description}</p>
               </li>
            </div>
         ))}
      </Slider>
   );
}
