import Slider from "react-slick";

import localization from "../../assets/language-switcher/localization";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import contentChameleonLogo from "../../assets/images/content-chameleon-logo.svg";
import dontPanicLogo from "../../assets/images/dont-panic-logo.svg";
import juniverseLogo from "../../assets/images/juniverse-logo.svg";
import logoBaza from "../../assets/images/logo-baza.svg";

export const Partners = () => {
   const partnerData = [
      {
         id: 1,
         link: "https://baza-trainee.tech/",
         linkImg: logoBaza,
      },

      {
         id: 2,
         link: "https://juniverse.com.ua/",
         linkImg: juniverseLogo,
      },
      {
         id: 3,
         link: "https://www.linkedin.com/company/content-chameleon-sales-agency/",
         linkImg: contentChameleonLogo,
      },
      {
         id: 4,
         link: "https://dontpanic.team/",
         linkImg: dontPanicLogo,
      },
   ];

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
               slidesToShow: 1.8,
            },
         },
         {
            breakpoint: 470,
            settings: {
               slidesToShow: 1.4,
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
                  <li className="partner-card" key={partner.id}>
                     <div className="card">
                        <a className="partner_img" href={partner.link} target="_blank">
                           <img src={partner.linkImg} />
                        </a>
                     </div>
                  </li>
               ))}
            </Slider>
         </ul>
      </div>
   );
};
