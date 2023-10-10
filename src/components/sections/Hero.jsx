import { useEffect, useState } from "react";
import { lendingData } from "../../api/api";
import { useLoadingData } from "../../hook/useLoadingData";
import { MySlider } from "../landing-components/MySlider";
import { useAppContext } from "../provider-components/app-provider";

export const Hero = () => {
   const { language } = useAppContext();
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

   return <section className="hero">{isLoading ? <></> : <MySlider slides={slides} />}</section>;
};
