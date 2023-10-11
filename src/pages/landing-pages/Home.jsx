import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { DividingLine } from "../../components/landing-components/DividingLine";
import { About } from "../../components/sections/About";
import { Mission } from "../../components/sections/Mission";
import { MySlider } from "../../components/sections/MySlider";
import { Partners } from "../../components/sections/Partners";
import { Projects } from "../../components/sections/Projects";
import { Contacts } from "../../components/sections/Contacts";

export const Home = () => {
   const location = useLocation();

   useEffect(() => {
      const elementId = location.hash.substring(1);
      scrollToElement(elementId);
   }, [location]);

   function scrollToElement(elementID) {
      const aboutElement = document.getElementById(elementID);
      if (aboutElement) {
         aboutElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
   }

   return (
      <>
         <MySlider />
         <Mission></Mission>
         <DividingLine mainColor={"whiteContainer"}></DividingLine>
         <About></About>
         <Projects></Projects>
         <DividingLine mainColor={"greenContainer"}></DividingLine>
         <Partners></Partners>
         <Contacts></Contacts>
      </>
   );
};
