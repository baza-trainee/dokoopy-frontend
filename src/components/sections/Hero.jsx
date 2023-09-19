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
         title: "Збір для воїнів 57 бригади, які беруть участь в найзапекліших боях!",
      },

      {
         id: 3,
         url: foto3,
         title: "Наш внесок - це шлях до перемоги наших військових Героїв!",
      },
      {
         id: 4,
         url: foto4,
         title: "Захистимо разом наших Героїв! ",
      },
      {
         id: 5,
         url: foto5,
         title: "Об'єднаймо зусилля для підтримки 57-ї бригади!",
      },
   ];

   return (
      <section className="hero">
         <MySlider slides={slides} />
      </section>
   );
};
