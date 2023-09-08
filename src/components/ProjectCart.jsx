export const ProjectCart = ({ id, src, data, title, description }) => {
   return (
      <div key={id} className="content">
         <div className="project-img-blok">
            <img className="project-img" src={src}></img>
         </div>

         <div className="text-blok">
            <div className="data-title-blok">
               <p className="project-data">{data}</p>
               <h3 className="project-cart-title">{title}</h3>
            </div>
            <p className="project-description">{description}</p>
         </div>
      </div>
   );
};
