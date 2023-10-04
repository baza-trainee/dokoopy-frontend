import React, { useState } from "react";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { InputSm } from "../../../components/admin-components/formElement/InputSm";

export const EditContact = () => {
   const contactsData = [
      {
         id: 1,
         name: "Email",
         contact: "info@baza-trainee.tech",
         link: "mailto:info@baza-trainee.tech",
      },
      {
         id: 2,
         name: "Telegram",
         contact: "telegram_link",
         link: "https://t.me/+CBXkAJlsCy83ZDYy",
      },
   ];

   const [email, setEmail] = useState(contactsData[0].contact);
   const [telegram, setTelegram] = useState(contactsData[1].contact);

   const handleSaveChanges = () => {
      console.log("Email:", email);
      console.log("Telegram:", telegram);
   };

   const isSaveButtonDisabled = email.trim() === "" || telegram.trim() === "";

   return (
      <section className="page-container">
         <PageHeader title={"Редагувати контакти"} />
         <div className="edit-contact-payment-form-wrap">
            <div className="edit-contact-payment-form">
               <InputSm setSmInput={setEmail} label={"Email:"} value={email} isLink={true}  />
               <InputSm setSmInput={setTelegram} label={"Telegram:"} value={telegram} isLink={true}  />
            </div>
            <button
               className="admin-button"
               onClick={handleSaveChanges}
               disabled={isSaveButtonDisabled}
            >
               Внести зміни
            </button>
         </div>
      </section>
   );
};
