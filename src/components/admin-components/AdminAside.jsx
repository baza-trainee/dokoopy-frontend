import { Link } from "react-router-dom";

export const AdminAside = () => {
   return (
      <aside className="aside">
         <ul>
            <li className="admin-list-item">
               <Link to="/admin">Hero</Link>
            </li>
            <li className="admin-list-item">
               <Link to="projects">Проєкти</Link>
            </li>
            <li className="admin-list-item">
               <Link to="partners">Партнери</Link>
            </li>
            <li className="admin-list-item">
               <Link to="contacts">Контакти</Link>
            </li>
            <li className="admin-list-item">
               <Link to="bank-account">Банківські реквізити</Link>
            </li>
            <li className="admin-list-item">
               <Link to="reporting">Звітність</Link>
            </li>
         </ul>
         <button type="button">close</button>
      </aside>
   );
};
