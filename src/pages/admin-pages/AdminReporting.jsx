import { Link } from "react-router-dom";
import { AdminApi } from "../../api/api";
import fileText from "../../assets/icon/filetext.svg";
import { Spinner } from "../../components/admin-components/Spinner";
import { useLoadingData } from "../../hook/useLoadingData";

const AdminReporting = () => {
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
               {data.result.map(report => {
                  const fileName = report.reportURL.split("dokoopy/")[1].split(".")[0];
                  return (
                     <li className="reporting-cards" key={report._id}>
                        <div className="card-reporting">
                           <Link to="edit" state={{ item: report }} className="card-reporting">
                              <img src={fileText} alt="File" />
                              <h4 className="card-reporting-h4" rel="noopener noreferrer">
                                 {fileName}
                              </h4>
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

export default AdminReporting;
