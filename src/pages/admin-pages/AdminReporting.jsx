import { Link } from "react-router-dom";
import { AdminApi } from "../../api/api";
import fileText from "../../assets/icon/filetext.svg";
import { Spinner } from "../../components/admin-components/Spinner";
import { useLoadingData } from "../../hook/useLoadingData";

export const AdminReporting = () => {
   const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.getReportsAdmin);

   if (isLoading) {
      return <Spinner size={300} color={"#2672e4"} />;
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

   const reports = data?.reports || [];

   return (
      <div className="admin-reporting">
         <div className="reporting-container">
            <div className="reporting-container-title">
               <h2>Звітність</h2>
            </div>
         </div>
         <div className="reporting-container-card">
            <ul className="reporting-files">
               {reports.map(report => (
                  <li className="reporting-cards" key={report.id}>
                     <div className="card-reporting">
                        <Link to="edit" className="card-reporting">
                           <img src={fileText} alt="File" />
                           <a
                              href={`https://dokoopy.onrender.com/${report.reportURL}`}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                               {report.reportURL}
                           </a>
                        </Link>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};
