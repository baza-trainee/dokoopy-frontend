import localization from "../../assets/language-switcher/localization";

export const Contacts = () => {
   return (
      <div className="contact">
         <div className="container">
            <div className="contact-box">
               <div className="contact-box-title">
                  <h2 className="contact-box-title-h2">{localization.contacts.title}</h2>
                  <p className="contact-box-title-p">{localization.contacts.appeal}</p>
               </div>
               <div className="contact-link ">
                  <a className="navigation-list-item" href="mailto:eugene@dontpanic.team">
                     email
                  </a>
                  <a
                     className="navigation-list-item"
                     href="https://t.me/Boooble_boo"
                     target="_blanck"
                  >
                     telegram
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

// Якщо готові скластись dokoopy і долучитись до хорошої справи – пишіть прямо
//                      зараз ось сюди:
