import { FirstPageIcon } from "../../assets/admin-icons/footer/first-page";
import { PrevPageIcon } from "../../assets/admin-icons/footer/prev-page";
import { NextPageIcon } from "../../assets/admin-icons/footer/next-page";
import { LastPageIcon } from "../../assets/admin-icons/footer/last-page";

export const AdminFooter = () => {
   return (
      <footer className="admin-footer">
         <nav>
            <ul className="admin-navigation">
               <li>
                  <div>
                     <FirstPageIcon />
                  </div>
               </li>
               <li>
                  <div>
                     <PrevPageIcon />
                  </div>
               </li>
               <li>
                  <div>
                     <NextPageIcon />
                  </div>
               </li>
               <li>
                  <div>
                     <LastPageIcon />
                  </div>
               </li>
            </ul>
         </nav>
         <p>page 1 of 1</p>
      </footer>
   );
};
