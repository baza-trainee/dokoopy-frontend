import { MySlider } from "./Slider";

export const Hero = () => {
   const slides = [
      {
         id: 1,
         url: "../../../images/hero_example.jpg",
         title: "Збір на 57 бригаду, котрі беруть участь в найзапекліших боях",
      },
      {
         id: 2,
         url: "../../../images/1.jpg",
         title: "Збір на 57 бригаду, котрі беруть участь в найзапекліших боях",
      },
      {
         id: 3,
         url: "../../../images/7.jpg",
         title: "Збір на 57 бригаду, котрі беруть участь в найзапекліших боях",
      },
      {
         id: 4,
         url: "../../../images/8.jpg",
         title: "Збір на 57 бригаду, котрі беруть участь в найзапекліших боях",
      },
   ];

   return (
      <section className="hero">
         <MySlider slides={slides} />
      </section>
   );
};
