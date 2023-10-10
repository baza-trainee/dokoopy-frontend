import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { DividingLine } from "../../components/landing-components/DividingLine";
import { About } from "../../components/sections/About";
import { Hero } from "../../components/sections/Hero";
import { Mission } from "../../components/sections/Mission";
import { Partners } from "../../components/sections/Partners";
import { Projects } from "../../components/sections/Projects";
import { Footer } from "../../components/landing-components/Footer";

export const Home = () => {
   const [modalActive, setModalActive] = useState(false);

   const location = useLocation();

   useEffect(() => {
      const elementId = location.hash.substring(1); // Remove the leading '#' from the URL hash
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
         <Hero></Hero>
         <Mission></Mission>
         <DividingLine mainColor={"whiteContainer"}></DividingLine>
         <About></About>
         <Projects></Projects>
         <DividingLine mainColor={"greenContainer"}></DividingLine>
         <Partners></Partners>
      </>
   );
};
