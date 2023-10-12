import { useState } from "react";
import { Link } from "react-router-dom";

export const AsideListItem = ({ title, style, link, children }) => {
   return (
      <Link to={link} className={style}>
         {children} <span className="bank-account-text">{title}</span>
      </Link>
   );
};
