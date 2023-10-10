
import { useAppContext } from "../provider-components/app-provider";

import localization from "../../assets/language-switcher/localization";

import { lendingData } from "../../api/api";
import { useLoadingData } from "../../hook/useLoadingData";

export const Contacts = () => {

   const AppContext = useAppContext();


   const { data, isLoading, error, eventLoading } = useLoadingData(lendingData.getContact);

   return (
      <section className="contact">
         <div className="container">
            <div className="contact-box">
               <div className="contact-box-title">
                  <h2 className="contact-box-title-h2">{localization.contacts.title}</h2>
                  <p className="contact-box-title-p">{localization.contacts.appeal}</p>
               </div>
               <div className="contact-link ">
                  <a className="navigation-list-item" href={`mailto:${data?.contacts?.email}`}>
                     email
                  </a>
                  <a
                     className="navigation-list-item"
                     href={`${data?.contacts?.telegram}`}
                     target="_blank"
                  >
                     telegram
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

// Якщо готові скластись dokoopy і долучитись до хорошої справи – пишіть прямо
//                      зараз ось сюди:
