import { DonateButton } from '../DonateButton';

export const About = () => {
   return (
   <section className="about-section">
      <div className="container">
      <div className="about-wrapper">
      <div className="about-photo-container">
         <img className="about-photo" src="src/assets/img/about_img.jpg" alt="flag_military"></img>
       </div>
         <h1 className="about-title">Про бригаду</h1>
         <div className="about-description-container">
            <p className="about-description-text">
            57-ма окрема мотопіхотна бригада імені кошового отамана Костя 
            Гордієнка була сформована вже після початку російської агресії, 
            восени 2014 року. До її складу увійшли три батальйони, які також 
            були сформовані вже після початку війни: 17-й, 34-й та 42-й мотопіхотні. 
            Взимку 2015 року підрозділи бригади воювали під Дебальцевим.
            </p>
            <div className="about-btn-container">
            <DonateButton buttonClass={'mainButton'} />
            </div>
         </div>
         </div>
      </div>
   </section>
   );
};