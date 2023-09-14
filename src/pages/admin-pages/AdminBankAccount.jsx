import { EditIcon } from "../../assets/icon/EditIcon";

export const AdminBankAccount = () => {
  

   const bankAccountData = [
      {
         id: 1,
         name: 'Link',
         contact: 'monobank_link',
         link: 'https://send.monobank.ua/jar/4B1mQWmGVS'
      }
   ]
  return <div>
<div className="bank-contacts">
     <div className="bank-contacts-header">
      <h2>Банківські реквізити</h2>
     </div>
     <div className="bank-contacts-list">
     <ul className="bank-contacts-list-ul">
      {bankAccountData.map(monobank => (
         <li className="bank-card" key={monobank.id}>
            <div className="bank-li">
               <p>{monobank.name}</p>
               <div className="bank-li-group">
               <a href={monobank.link}>{monobank.contact}</a>
               <button><EditIcon/></button>
               </div>
            </div>
         </li>
      )
      )}
     </ul>
     </div>
   </div>


   </div>;
};
