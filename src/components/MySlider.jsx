import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import arrow from "../assets/arrow.svg";
// import arrRight from "../assets/chevron-right.svg";

export const MySlider = ({ slides }) => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      adaptiveHeight: true,
      swipe: false,
      responsive: [
         {
            breakpoint: 1199,
            settings: {
               swipe: true,
            },
         },
      ],
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
function SampleNextArrow({ onClick }) {
   return (
      <div
         className="container"
         style={{
            display: "flex",
            justifyContent: "end",
         }}
      >
         <div aria-label="Наступний слайд" className="slider-arrow" onClick={onClick}>
            <button className="arrow-slider">
               <img src={arrow}></img>
            </button>
         </div>
      </div>
   );
}
function SamplePrevArrow({ onClick }) {
   return (
      <div className="container">
         <div aria-label="Попередній слайд" className="slider-arrow" onClick={onClick}>
            <button className="arrow-slider rotate-arrow">
               <img src={arrow}></img>
            </button>
         </div>
      </div>
   );
}
