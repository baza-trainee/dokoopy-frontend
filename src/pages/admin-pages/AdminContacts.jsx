import { EditIcon } from "../../assets/icon/EditIcon";

export const AdminContacts = () => {
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
               <p>Name</p>
               <p>Data</p>
            </div>
            <ul className="admin-contacts-list-ul">
               {contactsData.map(contacts => (
                  <li className="contacts-card" key={contacts.id}>
                     <div className="contacts-li">
                        <p>{contacts.name}</p>
                        <div className="contacts-li-group">
                           <a href={contacts.link}>{contacts.contact}</a>
                           <button className="edit-contcts">
                              <EditIcon />
                           </button>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};
