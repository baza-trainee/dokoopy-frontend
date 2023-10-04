import { Link } from "react-router-dom";
import { EditIcon } from "../../assets/icon/EditIcon";
import { PageHeader } from "../../components/admin-components/PageHeader";
import { useLoadingData } from "../../hook/useLoadingData";
import { AdminApi } from "../../api/api";

export const AdminBankAccount = () => {
  const { data, isLoading, error, eventLoading } = useLoadingData(AdminApi.getBankAdmin);

  const defaultBankAccountData = [
    {
      id: 1,
      name: "Link",
      contact: "monobank_link",
      link: "https://send.monobank.ua/jar/4B1mQWmGVS",
    },
  ];

  const bankAccountData = data || defaultBankAccountData;

  
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
    <div>
      <div className="bank-contacts">
        <div className="bank-contacts-header">
          <PageHeader title={"Банківські реквізити"} />
        </div>
        <div className="bank-contacts-list">
          <div className="bank-contacts-list-title">
            <p>Назва</p>
            <p>URL</p>
            <span></span>
          </div>
          <ul className="bank-contacts-list-ul">
            {bankAccountData.map((monobank) => (
              <li className="bank-card" key={monobank.id}>
                <div className="bank-li">
                  <p>{monobank.name}</p>
                  <a href={monobank.link}>{monobank.contact}</a>
                  <button>
                    <Link to="edit">
                      <EditIcon />
                    </Link>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
