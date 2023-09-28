import React from 'react';
import { PageHeader } from "../../../components/admin-components/PageHeader";
import fileText from "../../../assets/icon/filetext.svg";
import { EditIcon } from "../../../assets/icon/EditIcon";

export const EditReporting = () => {
   const reportingData = {
      id: 1,
      name: '57_.pdf',
      imgIcon: fileText
   };

   return (
      <section className="edit-report-container">
         <PageHeader title={"Редагувати звітність"} />
         <div className='edit-report-form'>
            <div className='edit-reporting-title-wrap'>
               <h2>Файл*</h2>
               <div className="reporting-container-button">
                  <button className="edit-icon-btn"><EditIcon /></button>
               </div>
            </div>
            <div className="edit-reporting-cards">
               <img src={reportingData.imgIcon} alt={reportingData.name} style={{ cursor: 'pointer' }}/>
               <p>{reportingData.name}</p>
            </div>
            <button className="admin-button" onClick={reportingData}>Внести зміни</button>
         </div>
      </section>
   );
};
