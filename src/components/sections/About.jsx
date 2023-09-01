import '../../styles/components/_about.scss';
import { DonateButton } from '../DonateButton';

export const About = () => {
   return (
   <section className="about_section">
      <div className="about_wrapper">
         <div className="about_title">Про бригаду</div>
         <div className="about_description_wrapper">
         <div className="about_description_container">
            <p className="about_description_text">
            57-ма окрема мотопіхотна бригада імені кошового отамана Костя 
            Гордієнка була сформована вже після початку російської агресії, 
            восени 2014 року. До її складу увійшли три батальйони, які також 
            були сформовані вже після початку війни: 17-й, 34-й та 42-й мотопіхотні. 
            Взимку 2015 року підрозділи бригади воювали під Дебальцевим.
            </p>
            <div className="about_btn_container">
            <DonateButton buttonClass={'mainButton'} />
         </div>
         </div>
         <div className="about_photo_wrapper">
       <div className="about_photo_container">
        <div className="about_photo"></div>
       </div>
      </div>

         </div>
         
         
      </div>
      
   </section>
   );
};