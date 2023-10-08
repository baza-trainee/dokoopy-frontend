import { Link } from "react-router-dom";
import fileText from "../../assets/icon/filetext.svg";
import { useLoadingData } from "../../hook/useLoadingData";
import { AdminApi } from "../../api/api";

export const AdminReporting = () => {
  const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.getReportsAdmin);

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

  const reports = data?.reports || [];

  return (
    <div className="admin-reporting">
      <div className="reporting-container">
        <div className="reporting-container-title">
          <h2>Звітність</h2>
        </div>
      </div>
      <ul className="reporting-files">
        {reports.map((report) => (
          <li className="reporting-cards" key={report.id}>
            <div className="card-reporting">
              <Link to={`/edit/${report.id}`}> {/* Зміни шлях, якщо необхідно передавати ідентифікатор репорту у URL */}
                <img src={fileText} alt="File" /> {/* Додайте альтернативний текст для зображення */}
                <a href={`https://dokoopy.onrender.com/${report.reportURL}`} target="_blank" rel="noopener noreferrer">
                  {report.reportURL}
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};