import { Link, useNavigate } from "react-router-dom";
import { AdminApi } from "../../api/api";
import { EditIcon } from "../../assets/admin-icons/EditIcon";
import lefticon from "../../assets/icon/Vector.svg";
import { useLoadingData } from "../../hook/useLoadingData";

export const AdminContacts = () => {
   const { data, isLoading, error, eventLoading } = useLoadingData(
      AdminApi.getContactsAdmin
      // AdminApi.getContactsAdmin,
      // true
   );
   const navigate = useNavigate();
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
      return <p>Loading...</p>;
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
         <div className="admin-contacts-header" onClick={() => navigate(-1)}>
            <img src={lefticon} />
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
                  <li className="contacts-card" key={contact.id}>
                     <div className="contacts-li">
                        <p>{contact.name}</p>
                        <a href={contact.link}>{contact.contact}</a>
                        <button className="edit-contcts">
                           <Link to="edit">
                              <EditIcon />
                           </Link>
                        </button>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};
