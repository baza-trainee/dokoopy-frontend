import { Link } from "react-router-dom";
import { AdminApi } from "../../api/api";
import { AdminIconEdit } from "../../assets/admin-icons/admin-icon-edit";
import { Spinner } from "../../components/admin-components/Spinner";
import { useLoadingData } from "../../hook/useLoadingData";

export const AdminContacts = () => {
   const { data, isLoading, error, eventLoading } = useLoadingData(
      AdminApi.getContactsAdmin
      // AdminApi.getContactsAdmin,
      // true
   );
   // const token = localStorage.getItem("token");
   const defaultContactsData = [
      {
         id: 1,
         name: "Email",
         contact: "info@baza-trainee.tech",
         link: "mailto:info@baza-trainee.tech",
      },
      { id: 1, name: "Telegram", contact: "telegram_link", link: "https://t.me/+CBXkAJlsCy83ZDYy" },
   ];

   const contactsData = data || defaultContactsData;

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
               {contactsData.map(contact => (
                  <Link to="edit">
                     <li className="contacts-card" key={contact.id}>
                        <div className="contacts-li">
                           <p>{contact.name}</p>
                           <a href={contact.link}>{contact.contact}</a>
                           <button className="edit-contcts">
                              <AdminIconEdit />
                           </button>
                        </div>
                     </li>
                  </Link>
               ))}
            </ul>
         </div>
      </div>
   );
};
