import { Link } from "react-router-dom";

export const AdminAside = () => {
   return (
      <aside className="aside">
         this is aside
         <ul>
            <li>
               <Link to="/admin">Hero</Link>
            </li>
            <li>
               <Link to="projects">Проєкти</Link>
            </li>
            <li>
               <Link to="partners">Партнери</Link>
            </li>
            <li>
               <Link to="contacts">Контакти</Link>
            </li>
            <li>
               <Link to="bank-account">Банківські реквізити</Link>
            </li>
            <li>
               <Link to="reporting">Звітність</Link>
            </li>
         </ul>
         <button type="button">close</button>
      </aside>
   );
};
