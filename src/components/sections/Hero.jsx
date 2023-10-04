import { useEffect, useState } from "react";
import { lendingData } from "../../api/api";
import foto3 from "../../assets/images/8.jpg";
import foto4 from "../../assets/images/about_img.jpg";
import foto1 from "../../assets/images/hero_example.jpg";
import foto5 from "../../assets/images/photo5.jpeg";
import { useLoadingData } from "../../hook/useLoadingData";
import { MySlider } from "../landing-components/MySlider";
import { useLandingContext } from "../provider-components/landing-provider";

export const Hero = () => {
   const { language } = useLandingContext();
   const [slides, setSlides] = useState([]);
   const { data, error, isLoading } = useLoadingData(lendingData.getHero);
   useEffect(() => {
      if (data?.heroes) {
         setSlides(
            data?.heroes.map(item => ({
               ...item,
               imageURL: `https://dokoopy.onrender.com/${item.imageURL}`,
               description: language === "ua" ? item.description : item.description_eng,
            }))
         );
      }
   }, [data?.heroes, language]);
   console.log(slides);
   const slidess = [
      {
         id: 1,
         imageURL: foto1,
         description: "Збір для воїнів 57 бригади, які беруть участь в найзапекліших боях!",
      },

      {
         id: 3,
         imageURL: foto3,
         description: "Наш внесок - це шлях до перемоги наших військових!",
      },
      {
         id: 4,
         imageURL: foto4,
         description: "Захистимо разом наших Героїв! ",
      },
      {
         id: 5,
         imageURL: foto5,
         description: "Об'єднаймо зусилля для підтримки 57-ї бригади!",
      },
   ];
   return (
      <section className="hero">
         <MySlider slides={slidess} />
      </section>
   );
};
