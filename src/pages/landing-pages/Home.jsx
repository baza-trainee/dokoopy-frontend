import { useState } from "react";
import { DividingLine } from "../../components/DividingLine";
import { About } from "../../components/sections/About";
import { Contacts } from "../../components/sections/Contacts";
import { Hero } from "../../components/sections/Hero";
import { Mission } from "../../components/sections/Mission";
import { Partners } from "../../components/sections/Partners";
import { Projects } from "../../components/sections/Projects";

export const Home = () => {
   const [modalActive, setModalActive] = useState(false);
   return (
      <>
         <Hero></Hero>
         <Mission></Mission>
         <DividingLine mainColor={"whiteContainer"}></DividingLine>
         <About></About>
         <Projects></Projects>
         <DividingLine mainColor={"greenContainer"}></DividingLine>
         <Partners></Partners>
         <Contacts></Contacts>
         {/* <Modal active={modalActive} setActive={setModalActive}></Modal> */}
      </>
   );
};
