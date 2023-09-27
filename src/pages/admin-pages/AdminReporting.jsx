import fileText from "../../assets/icon/filetext.svg";
import { EditIcon } from "../../assets/icon/EditIcon";
import { EditReporting } from "./editPage/EditReporting";

export const AdminReporting = () => {
   const reportingData = [
      {
         id: 1,
         name: "57_.pdf",
         imgIcon: fileText,
      },
   ];

   return (
      <div className="admin-reporting">
         <div className="reporting-container">
            <div className="reporting-container-title">
               <h2>Звітність</h2>
            </div>
            <div className="reporting-container-button">
               <button className="edit-icon-btn">
                  <EditIcon />
               </button>
            </div>
         </div>
         <ul className="reporting-files">
            {reportingData.map(files => (
               <li className="reporting-cards" key={files.id}>
                  <div className="card-reporting">
                     <img src={files.imgIcon} />
                     <p>{files.name}</p>
                  </div>
               </li>
            ))}
         </ul>
         <EditReporting />
      </div>
   );
};
