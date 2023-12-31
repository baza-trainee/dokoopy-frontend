import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { lendingData } from "../../api/api";
import localization from "../../assets/language-switcher/localization";
import { useLoadingData } from "../../hook/useLoadingData";

import { useAppContext } from "../provider-components/app-provider";

export const Partners = () => {
   const AppContext = useAppContext();
   const { data, isLoading, error, eventLoading } = useLoadingData(lendingData.getPartners);

   if (isLoading) {
      return <p>Loading...</p>;
   }

   if (error) {
      return <p>Error: {error.message}</p>;
   }
   const partnerData = data.partners || [];

   const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      draggable: true,

      responsive: [
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 2.3,
            },
         },
         {
            breakpoint: 598,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 470,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 363,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   };
   return (
      <div className="partner">
         <div className="container">
            <h2 className="title">{localization.partners.title}</h2>
         </div>
         <ul className="partners_list">
            <Slider {...settings}>
               {partnerData.map(partner => (
                  <li className="partner-card" key={partner._id}>
                     <div className="card">
                        <a className="partner_img" href={partner.link} target="_blank">
                           <img src={partner.imageURL} />
                        </a>
                     </div>
                  </li>
               ))}
            </Slider>
         </ul>
      </div>
   );
};
