import { Link } from "react-router-dom";
import fileText from "../../assets/icon/filetext.svg";
import lefticon from "../../assets/icon/Vector.svg";
import { useLoadingData } from "../../hook/useLoadingData";
import { AdminApi } from "../../api/api";
import { useNavigate } from "react-router-dom";

export const AdminReporting = () => {
  const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.getReportsAdmin);
  const navigate = useNavigate();

  const defaultReportingData = [
    {
      id: 1,
      name: "57_.pdf",
      imgIcon: fileText,
    },
  ];

  const reportingData = data || defaultReportingData;

  if (isLoading) {
   return <p>Loading...</p>;
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
        <div className="reporting-container-title" onClick={() => navigate(-1)}>
         <img src={lefticon} />
          <h2>Звітність</h2>
        </div>
      </div>
      <ul className="reporting-files">
        {reportingData.map((files) => (
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
