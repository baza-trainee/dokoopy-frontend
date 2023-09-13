import foto2 from "../../assets/images/7.jpg";
import foto3 from "../../assets/images/8.jpg";
import foto4 from "../../assets/images/about_img.jpg";
import foto1 from "../../assets/images/hero_example.jpg";
import foto5 from "../../assets/images/photo5.jpeg";

import { MySlider } from "../MySlider";
export const Hero = () => {
   const slides = [
      {
         id: 1,
         url: foto1,
         title: "Збір на 57 бригаду, котрі беруть участь в найзапекліших боях",
      },
      {
         id: 2,
         url: foto2,
         title: "Збір на 57 бригаду, котрі беруть участь в найзапекліших боях Збір на 57 бригаду, котрі беруть участь в найзапекліших боя",
      },
      {
         id: 3,
         url: foto3,
         title: "Збір на 57 бригаду, котрі беруть участь в найзапекліших боях ",
      },
      {
         id: 4,
         url: foto4,
         title: "Збір на 57 бригаду, котрі беруть участь в найзапекліших боях Збір на 57 бригаду, котрі беруть участь в найзапекліших бояЗбір на ",
      },
      {
         id: 5,
         url: foto5,
         title: "Збір на 57 бригаду, котрі беруть участь в найзапекліших боях",
      },
   ];

   return (
      <section className="hero">
         <MySlider slides={slides} />
      </section>
   );
};
