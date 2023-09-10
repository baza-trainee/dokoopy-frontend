import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import arrowLeft from "../assets/arrow-left-icon.svg";
import arrowRight from "../assets/arrow-right-icon.svg";

export const MySlider = ({ slides }) => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      adaptiveHeight: true,
   };
   return (
      <div>
         <Slider {...settings}>
            {slides.map(item => (
               <div key={item.id} className="slider-container">
                  <div
                     className="slider"
                     style={{
                        backgroundImage: `url(${item.url})`,
                        backgroundSize: "cover",
                     }}
                  ></div>
                  <div className="container">
                     <div className="slider-title">
                        <p aria-label={item.title}>{item.title}</p>
                     </div>
                  </div>
               </div>
            ))}
         </Slider>
      </div>
   );
};
function NextArrow({ onClick }) {
   return (
      <div
         className="container"
         style={{
            display: "flex",
            flexDirection: "row-reverse",
         }}
      >
         <button onClick={onClick} aria-label="Наступний слайд" className="arrow-slider">
            <img src={arrowRight}></img>
         </button>
      </div>
   );
}
function PrevArrow({ onClick }) {
   return (
      <div className="container">
         <button aria-label="Попередній слайд" onClick={onClick} className="arrow-slider ">
            <img src={arrowLeft}></img>
         </button>
      </div>
   );
}
