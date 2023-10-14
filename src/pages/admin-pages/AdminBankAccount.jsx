import { Link } from "react-router-dom";
import { AdminApi } from "../../api/api";
import { AdminIconEdit } from "../../assets/admin-icons/admin-icon-edit";
import { Spinner } from "../../components/admin-components/Spinner";
import { useLoadingData } from "../../hook/useLoadingData";

export const AdminBankAccount = () => {
   const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.getBankAdmin);

   
   const bankAccountData = data || [];
   if (isLoading) {
      return <Spinner size={300} color={"#2672e4"} />;
   }

   if (error && error.data) {
      return (
         <div>
            <p>
               Помилка: {error.message}
               <br />
               Код помилки: {error.code}
               <br />
               URL-адреса: {error.url}
            </p>
         </div>
      );
   }
   const banklink = data.bank[0];
   return (
      <div>
         <div className="bank-contacts">
            <div className="bank-contacts-header">
               <h2>Банківські реквізити</h2>
            </div>
            <div className="bank-contacts-list">
               <div className="bank-contacts-list-title">
                  <p>Назва</p>
                  <p>URL</p>
                  <span></span>
               </div>
               <ul className="bank-contacts-list-ul">
                  <Link to="edit" state={{ item: bankAccountData }}>
                     <li className="bank-card">
                        <div className="bank-li">
                           <p>Реквізити</p>
                           <a href={`mailto:${banklink.link}`}>
                              {banklink.link}
                           </a>
                           <button>
                              <AdminIconEdit />
                           </button>
                        </div>
                     </li>
                  </Link>
               </ul>
            </div>
         </div>
      </div>
   );
};