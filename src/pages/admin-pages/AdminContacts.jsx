import { Link } from "react-router-dom";
import { AdminApi } from "../../api/api";
import { AdminIconEdit } from "../../assets/admin-icons/admin-icon-edit";
import { Spinner } from "../../components/admin-components/Spinner";
import { useLoadingData } from "../../hook/useLoadingData";

const AdminContacts = () => {
   const { data, isLoading } = useLoadingData(AdminApi.getContactsAdmin);

   if (isLoading) {
      return <Spinner size={300} color={"#2672e4"} />;
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
               {data.contacts.map((contact, index) => (
                  <li key={contact._id} className="contacts-card">
                     <Link to="edit" state={{ item: contact }}>
                        <div className="contacts-li">
                           <p>Email</p>
                           <h4 className="contacts-li-a">{contact.email}</h4>
                           <button className="edit-contacts">
                              <AdminIconEdit />
                           </button>
                        </div>
                     </Link>
                  </li>
               ))}
               {data.contacts.map((contact, index) => (
                  <li key={contact._id} className="contacts-card">
                     <Link to="edit" state={{ item: contact }}>
                        <div className="contacts-li">
                           <p>Telegram</p>
                           <h4 className="contacts-li-a">{contact.telegram}</h4>
                           <button className="edit-contacts">
                              <AdminIconEdit />
                           </button>
                        </div>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default AdminContacts;
