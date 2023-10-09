import { Link } from "react-router-dom";
import { AdminApi } from "../../api/api";
import fileText from "../../assets/icon/filetext.svg";
import { useLoadingData } from "../../hook/useLoadingData";
import { Spinner } from "../../components/admin-components/Spinner";

export const AdminReporting = () => {
   const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.getReportsAdmin);

   const defaultReportingData = [
      {
         id: 1,
         name: "57_.pdf",
         imgIcon: fileText,
      },
   ];

   const reportingData = defaultReportingData;

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

   return (
      <div className="admin-reporting">
         <div className="reporting-container">
            <div className="reporting-container-title">
               <h2>Звітність</h2>
            </div>
         </div>
         <ul className="reporting-files">
            {reportingData.map(files => (
               <li className="reporting-cards" key={files.id}>
                  <div className="card-reporting">
                     <Link to="edit">
                        <img src={files.imgIcon} />
                        <p>{files.name}</p>
                     </Link>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};
