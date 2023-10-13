import { useEffect, useState } from "react";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { InputSm } from "../../../components/admin-components/formElement/InputSm";
import { useLocation, useNavigate } from "react-router-dom";
import { AdminApi } from "../../../api/api";
import { useLoadingData } from "../../../hook/useLoadingData";

export const EditContact = () => {
   // const contactsData = [
   //    {
   //       id: 1,
   //       name: "Email",
   //       contact: "info@baza-trainee.tech",
   //       link: "mailto:info@baza-trainee.tech",
   //    },
   //    {
   //       id: 2,
   //       name: "Telegram",
   //       contact: "telegram_link",
   //       link: "https://t.me/+CBXkAJlsCy83ZDYy",
   //    },
   // ];
   const { state } = useLocation();
   const [email, setEmail] = useState(state.item.contacts.email);
   const [telegram, setTelegram] = useState(state.item.contacts.data);
   const {data, eventLoading} = useLoadingData(AdminApi.updateContacts, true);
   const navigate = useNavigate();

   useEffect(() => {
      data?.code === 200 ? navigate("/admin/contacts") : null;
   }, [navigate, data?.code]);

   const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

   const handleTelegramChange = (e) => {
		setTelegram(e.target.value);
	}

   const formData = {
      email: email,
      telegram: telegram,
    };

   const isSaveButtonDisabled = email.trim() === "" || telegram.trim() === "";

   return (
      <section className="page-container">
         <PageHeader title={"Редагувати контакти"} />
         {/* <div className="edit-contact-payment-form-wrap"> */}
         <form onSubmit={(e) => {e.preventDefault(); eventLoading(formData)}} className="edit-contact-payment-form-wrap">
            <div className="edit-contact-payment-form">
               <InputSm setSmInput={setEmail} label={"Email*"} value={email} isLink={true} 
               isEmptyInput={email.trim() === ""}
               onChange={handleEmailChange}
               />
               <InputSm
                  setSmInput={setTelegram}
                  label={"Telegram*"}
                  value={telegram}
                  isLink={true}
                  onChange={handleTelegramChange}
                  isEmptyInput={telegram.trim() === ""}
               />
            </div>
            <button
               className="admin-button"
               type="submit"
               disabled={isSaveButtonDisabled}
            >
               Внести зміни
            </button>
          </form> 
         {/* </div> */}
      </section>
   );
};
