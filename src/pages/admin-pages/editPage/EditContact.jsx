import React, { useState } from 'react';
import { PageHeader } from "../../../components/admin-components/PageHeader";

export const EditContact = () => {
   const contactsData = [
      {
         id: 1,
         name: 'Email',
         contact: 'info@baza-trainee.tech',
         link: 'mailto:info@baza-trainee.tech'
      },
      {  
         id: 2,
         name: 'Telegram',
         contact: 'telegram_link',
         link: 'https://t.me/+CBXkAJlsCy83ZDYy'
      }
   ];

   const [email, setEmail] = useState(contactsData[0].contact);
   const [telegram, setTelegram] = useState(contactsData[1].contact);

   const handleSaveChanges = () => {
      console.log("Email:", email);
      console.log("Telegram:", telegram);
      navigate(-1);
   };

   return (
      <section className="edit-contact-container">      
         <PageHeader title={"Редагувати контакти"} />   
         <div className='edit-contact-form'>
            <div>
               <p className="input-liable">Email:</p>
               <input
                  placeholder="Введіть Email"
                  className="sm-input edit-contact-input-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>         
            <div>
               <p className="input-liable">Telegram:</p>
               <input
                  placeholder="Введіть Telegram"
                  className="sm-input edit-contact-input-telegram"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
               />
            </div>        
            <button className="admin-button" onClick={handleSaveChanges}>Внести зміни</button>  
         </div>     
      </section>
   );
};
