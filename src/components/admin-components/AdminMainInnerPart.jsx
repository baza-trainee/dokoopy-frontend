import PropTypes from 'prop-types';

export const AdminMainInnerPart = ({name, photo, date, link, data}) => {
    return (
        <div className="admin-hero-main">
            <div className="admin-hero-main-header">
               <div className="admin-hero-main-header-wrapper">
               <div className="admin-hero-main-header-title">{name}</div>
               <div className="admin-hero-main-header-title">{photo}</div>
               <div className="admin-hero-main-header-title">{date ? date : link}</div>
               <div className="admin-hero-main-header-title"></div>
               </div>
            </div>
            <ul className="admin-hero-main-content"> 
               {data.map(contentData => {
                  return (
                     <li key={contentData.id} className="admin-hero-main-content-element">
                        <div className="content-element-wrapper">
                        <div className="content-element-name">{contentData.name}</div>
                        <div className="content-element-img-box">
                           <div className={contentData.date ? "wrapper-img-box" : "wrapper-img-box-svg"}>
                              <img src={contentData.img} alt={contentData.alt}
                              className="content-element-img">
                              </img>
                           </div>
                        </div>
                        <div className="content-element-data">{contentData.date ? contentData.date : contentData.link}</div>
                        <div className="content-edit-icon-box">
                           <div className="wrapper-edit-icon-box">
                              <div className="content-edit-icon"></div>
                           </div>
                        </div>
                        </div>
                     </li>
                  );
               })}
            </ul>
         </div>
    );
}
AdminMainInnerPart.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    date: PropTypes.string,
    link: PropTypes.string,
    data: PropTypes.array,

}