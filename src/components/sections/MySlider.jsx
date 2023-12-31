import { useCallback, useEffect, useRef, useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { lendingData } from "../../api/api.js";
import arrowLeft from "../../assets/icon/arrow-left-icon.svg";
import arrowRight from "../../assets/icon/right-icon.svg";
import { useLoadingData } from "../../hook/useLoadingData";
import { useAppContext } from "../provider-components/app-provider";
export const MySlider = () => {
   const [slides, setSlides] = useState([]);
   const slideRef = useRef();
   const observer = useRef();
   const { language } = useAppContext();

   const { data, isLoading } = useLoadingData(lendingData.getHero);

   useEffect(() => {
      if (data?.heroes) {
         setSlides(
            data?.heroes.map(item => ({
               ...item,
               description: language === "ua" ? item.description : item.description_eng,
            }))
         );
      }
   }, [data?.heroes, language]);
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
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
   };

   return (
      <section>
         {isLoading ? (
            <div className="temp-div"></div>
         ) : (
            <div className="hero" ref={refSliderObserver}>
               <Slider ref={slideRef} {...settings}>
                  {slides.map(item => (
                     <div key={item._id} className="slider-container">
                        <div className="slider">
                           <img alt={item.title} src={item.imageURL}></img>
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
         )}
      </section>
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
         <button aria-label="Попередній слайд" onClick={onClick} className="arrow-slider">
            <img src={arrowLeft}></img>
         </button>
      </div>
   );
}
