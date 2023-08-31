import { Header } from "./components/Header.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { Description } from "./components/sections/Description.jsx";
import { Quotation } from "./components/sections/Quotation.jsx";
import { History } from "./components/sections/History.jsx";
import { Mission } from "./components/sections/Mission.jsx";
import { Watchword } from "./components/sections/Watchword.jsx";
import { Footer } from "./components/Footer.jsx";
import { DividingLine } from "./components/DividingLine.jsx";
import { DonateButton } from "./components/donateButton.jsx";
import { Modal } from "./components/Modal.jsx";

function App() {
   return (
      <>
         <Header className="header"></Header>
         <Hero></Hero>
         <DividingLine></DividingLine>
         <Description></Description>
         <Quotation></Quotation>
         <History></History>
         <Mission></Mission>
         <DividingLine></DividingLine>
         <Watchword></Watchword>
         <Footer></Footer>
         <DonateButton></DonateButton>
         <Modal></Modal>
      </>
   );
}

export default App;
