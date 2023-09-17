import React, { useState } from 'react';
import { PageHeader } from "../../../components/admin-components/PageHeader";

export const EditPayment = () => {
   const bankAccountData = [
      {
         id: 1,
         name: 'Link',
         contact: 'monobank_link',
         link: 'https://send.monobank.ua/jar/4B1mQWmGVS'
      }
   ]

   const [bankLink, setBankLink] = useState(bankAccountData[0].link);
 

   const handleSaveChanges = () => {
      console.log("Посилання на банку:", bankLink);      
      navigate(-1);
   };

   return (
      <section className="edit-contact-container">      
         <PageHeader title={"Редагувати банківські реквізити"} />   
         <div className='edit-contact-form'>
            <div>
               <p className="input-liable">Посилання на банку*</p>
               <input
                  placeholder="посилання"
                  className="sm-input edit-contact-input-email"
                  value={bankLink}
                  onChange={(e) => setBankLink(e.target.value)}
               />
            </div>       
            <button className="admin-button" onClick={handleSaveChanges}>Внести зміни</button>  
         </div>     
      </section>
   );
};
