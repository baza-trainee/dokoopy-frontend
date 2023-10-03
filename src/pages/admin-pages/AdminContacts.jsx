// import { useLoadingData } from "../../hook/useLoadingData";
// import { AdminApi } from "../../api/api";
import { Link } from "react-router-dom";
import { EditIcon } from "../../assets/icon/EditIcon";

export const AdminContacts = () => {
   // const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.getContactsAdmin);

   // if (isLoading) {
   //    return <p>Loading...</p>;
   // }

   // if (error) {
   //    return <p>Error: {error.message}</p>;
   // }

   // const contactsData = data || [];

   const contactsData = [
      {
         id: 1,
         name: "Email",
         contact: "info@baza-trainee.tech",
         link: "mailto:info@baza-trainee.tech",
      },
      { id: 1, name: "Telegram", contact: "telegram_link", link: "https://t.me/+CBXkAJlsCy83ZDYy" },
   ];


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
               {contactsData.map((contact) => (
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
