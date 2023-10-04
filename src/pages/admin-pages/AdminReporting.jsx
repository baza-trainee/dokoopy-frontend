import { Link } from "react-router-dom";
import fileText from "../../assets/icon/filetext.svg";
import { PageHeader } from "../../components/admin-components/PageHeader";
import { useLoadingData } from "../../hook/useLoadingData";
import { AdminApi } from "../../api/api";



export const AdminReporting = () => {

   // const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.getReportsAdmin);

   // if (isLoading) {
   //    return <p>Loading...</p>;
   // }

   // if (error) {
   //    return <p>Error: {error.message}</p>;
   // }

   // const reportingData = data.result || [];


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
            <PageHeader title={"Звітність"} />
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
