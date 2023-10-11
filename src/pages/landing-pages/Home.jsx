import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { lendingData } from "../../api/api";
import { DividingLine } from "../../components/landing-components/DividingLine";
import { useAppContext } from "../../components/provider-components/app-provider";
import { About } from "../../components/sections/About";
import { Mission } from "../../components/sections/Mission";
import { MySlider } from "../../components/sections/MySlider";
import { Partners } from "../../components/sections/Partners";
import { Projects } from "../../components/sections/Projects";
import { useLoadingData } from "../../hook/useLoadingData";

export const Home = () => {
   const [slides, setSlides] = useState([]);
   const location = useLocation();
   const { language } = useAppContext();

   const { data } = useLoadingData(lendingData.getHero);

   useEffect(() => {
      if (slides.length) {
         const elementId = location.hash.substring(1);
         scrollToElement(elementId);
      }
   }, [location, slides]);

   useEffect(() => {
      if (data?.heroes) {
         setSlides(
            data?.heroes.map(item => ({
               ...item,
               imageURL: `https://dokoopy.onrender.com/${item.imageURL}`,
               description: language === "ua" ? item.description : item.description_eng,
            }))
         );
      }
   }, [data?.heroes, language]);

   function scrollToElement(elementID) {
      const aboutElement = document.getElementById(elementID);
      if (aboutElement) {
         aboutElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
   }

   return (
      <>
         <MySlider slides={slides} />
         <Mission></Mission>
         <DividingLine mainColor={"whiteContainer"}></DividingLine>
         <About></About>
         <Projects></Projects>
         <DividingLine mainColor={"greenContainer"}></DividingLine>
         <Partners></Partners>
      </>
   );
};
