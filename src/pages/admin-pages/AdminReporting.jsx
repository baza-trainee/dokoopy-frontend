import { Link } from "react-router-dom";
import { AdminApi } from "../../api/api";
import fileText from "../../assets/icon/filetext.svg";
import { Spinner } from "../../components/admin-components/Spinner";
import { useLoadingData } from "../../hook/useLoadingData";

export const AdminReporting = () => {
   const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.getReportsAdmin);
   const reports = data?.result || [];
   if (isLoading) {
      return <Spinner size={300} color={"#2672e4"} />;
   }
   if (error && error.data) {
      return (
         <div>
            <p>
               Помилка: {error.message}
               <br />
               Код помилки: {error.code}
               <br />
               URL-адреса: {error.url}
            </p>
         </div>
      );
   }
   return (
      <div className="admin-reporting">
         <div className="reporting-container">
            <div className="reporting-container-title">
               <h2>Звітність</h2>
            </div>
         </div>
         <div className="reporting-container-card">
            <ul className="reporting-files">
               {data.result.map((report) => {
                  const fileName = report.reportURL.split("dokoopy/")[1].split(".")[0];
                  return (
                     <li className="reporting-cards" key={report.id}>
                        <div className="card-reporting">
                           <Link to="edit" className="card-reporting">
                              <img src={fileText} alt="File" />
                              <a
                                 href={`https://dokoopy.onrender.com/${report.reportURL}`}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 {fileName}
                              </a>
                           </Link>
                        </div>
                     </li>
                  );
               })}

            </ul>
         </div>
      </div>
   );
};
