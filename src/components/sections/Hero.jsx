import { useEffect, useState } from "react";
import { lendingData } from "../../api/api";
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

   return (
      <section className="hero">
         <MySlider slides={slides} />
      </section>
   );
};
