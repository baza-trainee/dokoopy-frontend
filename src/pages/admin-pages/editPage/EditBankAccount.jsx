import { useEffect, useState } from "react";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { InputSm } from "../../../components/admin-components/formElement/InputSm";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoadingData } from "../../../hook/useLoadingData";
import { AdminApi } from "../../../api/api";

export const EditBankAccount = () => {
   // const bankAccountData = [
   //    {
   //       id: 1,
   //       name: "Link",
   //       contact: "monobank_link",
   //       link: "https://send.monobank.ua/jar/4B1mQWmGVS",
   //    },
   // ];
   const { state } = useLocation();
   const [bankLink, setBankLink] = useState(state.item.link);
   const {data, eventLoading} = useLoadingData(AdminApi.updateBank, true);
   const navigate = useNavigate();

   useEffect(() => {
      data?.code === 201 ? navigate("/admin/bank-account") : null;
   }, [navigate, data?.code]);

   const handleBankLinkChange = (e) => {
		setBankLink(e.target.value); 
	}

   const formData = {
      id: state.item._id,
      body: {
      link: bankLink,
      }
    };

   const isSaveButtonDisabled = bankLink.trim() === "";

   return (
      <section className="page-container">
         <PageHeader
            currentModal={"банківськй реквізит"}
            title={"Редагувати банківські реквізити"}
         />
         {/* <div className="edit-contact-payment-form-wrap "> */}
         <form onSubmit={(e) => {e.preventDefault(); eventLoading(formData)}} className="edit-contact-payment-form-wrap">
            <div className="edit-contact-payment-form">
               <InputSm
                  setSmInput={setBankLink}
                  label={"Посилання на банку*"}
                  value={bankLink}
                  isLink={true}
                  onChange={handleBankLinkChange}
                  isEmptyInput={bankLink.trim() === ""}
               />
            </div>
            <button
               className="admin-button"
               disabled={isSaveButtonDisabled}
            >
               Внести зміни
            </button>
            </form>
         {/* </div> */}
      </section>
   );
};
