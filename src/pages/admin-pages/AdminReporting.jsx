import { Link } from "react-router-dom";
import fileText from "../../assets/icon/filetext.svg";
import { useLoadingData } from "../../hook/useLoadingData";
import { AdminApi } from "../../api/api";

export const AdminReporting = () => {
  const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.getReportsAdmin);

  const reportingData = data || []
  console.log(data);

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
        <div className="reporting-container-title">
          <h2>Звітність</h2>
        </div>
      </div>
      <ul className="reporting-files">
          <li className="reporting-cards" key={data?.reports?.id}>
            <div className="card-reporting">
              <Link to="edit">
                <img src={fileText} />
                <a href={`https://dokoopy.onrender.com/${data?.reports?.reportURL}`}>{data?.reports?.reportURL}</a>
              </Link>
            </div>
          </li>
      </ul>
    </div>
  );
};
