import localization from "../../assets/language-switcher/localization";

// import { useLandingContext } from "../provider-components/landing-provider";
import { useAppContext } from "../provider-components/app-provider";

import { DonateButton } from "../landing-components/DonateButton";

import aboutPhoto from "../../assets/images/about_img.jpg";

export const About = () => {
   // const { language } = useLandingContext();
   const AppContext = useAppContext();
   return (
      <section id="about" className="about-section">
         <div className="container">
            <div className="about-wrapper">
               <div className="about-photo-container">
                  <img className="about-photo" src={aboutPhoto} alt="flag_military"></img>
               </div>
               <h1 className="about-title">{localization.about.title}</h1>
               <div className="about-description-container">
                  <p className="about-description-text">{localization.about.mainText}</p>
                  <div className="about-btn-container">
                     <DonateButton buttonClass={"mainButton"} />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

// 57-ма окрема мотопіхотна бригада імені кошового отамана Костя Гордієнка була
//                      сформована вже після початку російської агресії, восени 2014 року. До її складу
//                      увійшли три батальйони, які також були сформовані вже після початку війни:
//                      17-й, 34-й та 42-й мотопіхотні. Взимку 2015 року підрозділи бригади воювали під
//                      Дебальцевим.
