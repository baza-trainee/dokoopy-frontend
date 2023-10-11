import React, { useState } from "react";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { InputSm } from "../../../components/admin-components/formElement/InputSm";

export const EditBankAccount = () => {
   const bankAccountData = [
      {
         id: 1,
         name: "Link",
         contact: "monobank_link",
         link: "https://send.monobank.ua/jar/4B1mQWmGVS",
      },
   ];

   const [bankLink, setBankLink] = useState(bankAccountData[0].link);

   const handleSaveChanges = () => {
      console.log("Посилання на банку:", bankLink);
      navigate(-1);
   };

   const isSaveButtonDisabled = bankLink.trim() === "";

   return (
      <section className="page-container">
         <PageHeader
            currentModal={"банківськй реквізит"}
            title={"Редагувати банківські реквізити"}
         />
         <div className="edit-contact-payment-form-wrap ">
            <div className="edit-contact-payment-form">
               <InputSm
                  setSmInput={setBankLink}
                  label={"Посилання на банку*"}
                  value={bankLink}
                  isLink={true}
               />
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
