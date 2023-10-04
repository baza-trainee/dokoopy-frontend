import { useCallback, useRef } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import arrowLeft from "../../assets/icon/arrow-left-icon.svg";
import arrowRight from "../../assets/icon/right-icon.svg";

export const MySlider = ({ slides }) => {
   const slideRef = useRef();
   const observer = useRef();
   const refSliderObserver = useCallback(node => {
      if (observer.current) {
         observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(
         entries => {
            slideRef.current.slickPause();
            if (entries[0].isIntersecting) {
               slideRef.current.slickPlay();
            }
         },
         { threshold: 0.5 }
      );
      if (node) observer.current.observe(node);
   }, []);

   const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      // adaptiveHeight: true,
   };

   return (
      <div ref={refSliderObserver}>
         <Slider ref={slideRef} {...settings}>
            {slides.map(item => (
               <div key={item.id} className="slider-container">
                  <div className="slider">
                     <img loading="lazy" src={item.imageURL}></img>
                  </div>
                  <div className="container">
                     <div className="slider-title">
                        <p aria-label={item.title}>{item.description}</p>
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
