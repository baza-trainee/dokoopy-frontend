
import { useAppContext } from "../provider-components/app-provider";

import localization from "../../assets/language-switcher/localization";

import { lendingData } from "../../api/api";
import { useLoadingData } from "../../hook/useLoadingData";

export const Contacts = () => {

   const AppContext = useAppContext();


   const { data, isLoading, error, eventLoading } = useLoadingData(lendingData.getContact);
   
   if (isLoading) {
      return <p>Loading...</p>;
   }

   if (error) {
      return <p>Error: {error.message}</p>;
   }
   const contactData = data.contacts || [];

   const removeAtSymbol = (text) => text.replace("@", "");

   return (
      <section className="contact">
         <div className="container">
            <div className="contact-box">
               <div className="contact-box-title">
                  <h2 className="contact-box-title-h2">{localization.contacts.title}</h2>
                  <p className="contact-box-title-p">{localization.contacts.appeal}</p>
               </div>
               <ul className="contact-link ">
                  {contactData.map(contact => (


                     <li key={contact._id} className="contact-link ">
                        <a className="navigation-list-item" href={`mailto:${contact.email}`}>
                           email
                        </a>
                        <a className="navigation-list-item" href={`https://t.me/${removeAtSymbol(contact.telegram)}`} target="_blank">telegram</a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
};

// Якщо готові скластись dokoopy і долучитись до хорошої справи – пишіть прямо
//                      зараз ось сюди:
