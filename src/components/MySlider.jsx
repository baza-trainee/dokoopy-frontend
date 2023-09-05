import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import arrLeft from "../../assets/chevron-left.svg";
import arrRight from "../../assets/chevron-right.svg";

export const MySlider = ({ slides }) => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };
   return (
      <div>
         <Slider {...settings}>
            {slides.map(item => (
               <div className="slider-container">
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
            <img src={arrRight}></img>
         </div>
      </div>
   );
}
function SamplePrevArrow({ onClick }) {
   return (
      <div className="container">
         <div aria-label="Попередній слайд" className="slider-arrow" onClick={onClick}>
            <img src={arrLeft}></img>
         </div>
      </div>
   );
}
