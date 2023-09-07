export const Partners = () => {
   const partnerData = [
      { link: 'https://baza-trainee.tech/', linkImg: '../../../public/images/logo-baza.png' },
      { link: 'https://baza-trainee.tech/', linkImg: '../../../public/images/logo-baza.png' },
      { link: 'https://baza-trainee.tech/', linkImg: '../../../public/images/logo-baza.png' },
      { link: 'https://baza-trainee.tech/', linkImg: '../../../public/images/logo-baza.png' },
      
    ];
    
    
   return (
      <div className="partners">
            <div className="container">
               <div className="partner">
                  <h2 className="title">Наші партнери</h2>
               <div class="partner-list">
               {partnerData.map((partner, index) => (
              <PartnerCard key={index} link={partner.link} linkImg={partner.linkImg} />
            ))}
               </div>
            </div>
         </div>
      </div>
   );
};

function PartnerCard({ link, linkImg }){
   return (
     <a href={link} target="_blank">
       <div className="partner-card"><img src={linkImg}/> </div>
     </a>
   );
 };
 
