import { useState } from "react";
import { Hero } from "../../components/sections/Hero";
import { Mission } from "../../components/sections/Mission";
import { DividingLine } from "../../components/DividingLine";
import { About } from "../../components/sections/About";
import { Projects } from "../../components/sections/Projects";
import { Partners } from "../../components/sections/Partners";
import { Contacts } from "../../components/sections/Contacts";
import { Modal } from "../../components/Modal";

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
