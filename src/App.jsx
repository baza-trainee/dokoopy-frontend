import { Header } from "./components/Header.jsx";
import { Hero } from "./components/sections/Hero.jsx";

import { Mission } from "./components/sections/Mission.jsx";
import { About } from "./components/sections/About.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { Partners } from "./components/sections/Partners.jsx";
import { Contacts } from "./components/sections/Contacts.jsx";

import { Footer } from "./components/Footer.jsx";
import { DividingLine } from "./components/DividingLine.jsx";
import { DonateButton } from "./components/DonateButton.jsx";
import { Modal } from "./components/Modal.jsx";

function App() {
   return (
      <>
         <Header></Header>
         <Hero></Hero>
         <Mission></Mission>
         <DividingLine></DividingLine>
         <About></About>
         <Projects></Projects>
         <DividingLine></DividingLine>
         <Partners></Partners>
         <Contacts></Contacts>
         <Footer></Footer>
         <DonateButton></DonateButton>
         <Modal></Modal>
      </>
   );
}

export default App;
