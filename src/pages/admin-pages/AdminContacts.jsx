import { Link } from "react-router-dom";
import { AdminApi } from "../../api/api";
import { AdminIconEdit } from "../../assets/admin-icons/admin-icon-edit";
import { Spinner } from "../../components/admin-components/Spinner";
import { useLoadingData } from "../../hook/useLoadingData";

export const AdminContacts = () => {
   const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.getContactsAdmin);

   const contactsData = data || [];

   if (isLoading) {
      return <Spinner size={300} color={"#2672e4"} />;
   }

   if (error && error.data) {
      return (
         <p>
            Error: {error.message}
            <br />
            Код помилки: {error.code}
            <br />
            URL-адреса: {error.url}
         </p>
      );
   }

   return (
      <div className="admin-contacts">
         <div className="admin-contacts-header">
            <h2>Контакти</h2>
         </div>
         <div className="admin-contacts-list">
            <div className="admin-contacts-list-title">
               <p>Назва</p>
               <p>URL</p>
               <span></span>
            </div>
            <ul className="admin-contacts-list-ul">
               <Link to="edit">
                  <li className="contacts-card">
                     <div className="contacts-li">
                        <p>Email</p>
                        <a href={`mailto:${data?.contacts?.email}`}>{data?.contacts?.email}</a>
                        <button className="edit-contcts">
                           <AdminIconEdit />
                        </button>
                     </div>
                  </li>
               </Link>
               <Link to="edit">
                  <li className="contacts-card">
                     <div className="contacts-li">
                        <p>Telegram</p>
                        <a href={`${data?.contacts?.telegram}`}>{data?.contacts?.telegram}</a>
                        <button className="edit-contcts">
                           <AdminIconEdit />
                        </button>
                     </div>
                  </li>
               </Link>
            </ul>
         </div>
      </div>
   );
};
