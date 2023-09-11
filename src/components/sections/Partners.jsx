import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export const Partners = () => {
   const partnerData = [
      {
         id: 1,
         link: "https://baza-trainee.tech/",
         linkImg: "../../../images/logo-baza.png",
      },

      {
         id: 2,
         link: "https://baza-trainee.tech/",
         linkImg: "../../../images/logo-baza.png",
      },
      {
         id: 3,
         link: "https://baza-trainee.tech/",
         linkImg: "../../../images/logo-baza.png",
      },
      {
         id: 4,
         link: "https://baza-trainee.tech/",
         linkImg: "../../../images/logo-baza.png",
      },
      {
         id: 5,
         link: "https://baza-trainee.tech/",
         linkImg: "../../../images/logo-baza.png",
      },
   ];

   const settings = {
      infinite: true,
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      swiper: true,

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
            breakpoint: 768,
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
            <h2 className="title">Наші партнери</h2>
         </div>
         <ul className="partners_list">
            <Slider {...settings}>
               {partnerData.map(partner => (
                  <li className="partner-card" key={partner.id}>
                     <div
                        style={{
                           width: "min-content",
                           backgroundImage: `url(${partner.linkImg})`,
                           // backgroundSize: "cover",
                           backgroundPosition: "center",
                           backgroundRepeat: "no-repeat",
                        }}
                        className="card"
                     >
                        <a className="partner_img" href={partner.link} target="_blank"></a>
                     </div>
                  </li>
               ))}
            </Slider>
         </ul>
      </div>
   );
};
