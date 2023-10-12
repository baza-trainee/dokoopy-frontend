import { useState } from "react";
import { Link } from "react-router-dom";

export const AsideListItem = ({ title, children }) => {
   const [active, setActive] = useState(false);
   return (
      <li className="admin-list-item">
         <Link className="admin-list-link">
            {children} <span className="bank-account-text">{title}</span>
         </Link>
      </li>
   );
};
