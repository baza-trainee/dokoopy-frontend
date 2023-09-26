import icon from "../../assets/icon/Logo_Ukraine_Defense.svg";

export const DividingLine = ({ mainColor }) => {
   if (mainColor === "whiteContainer") {
      return (
         <div className="outerContainer">
            <div className={mainColor + " containerHeshteg "}>
               <div className="contentHeshteg">#ХОЛОД У ЖИЛАХ</div>
               <div className="contentHeshteg">#ЗАПАЛ У СЕРЦЯХ</div>
               <div className="contentHeshteg">#ХОЛОД У ЖИЛАХ</div>
               <div className="contentHeshteg">#ЗАПАЛ У СЕРЦЯХ</div>
               <div className="contentHeshteg">#ХОЛОД У ЖИЛАХ</div>
               <div className="contentHeshteg">#ЗАПАЛ У СЕРЦЯХ</div>
               <div className="contentHeshteg">#ХОЛОД У ЖИЛАХ</div>
               <div className="contentHeshteg">#ЗАПАЛ У СЕРЦЯХ</div>
            </div>
         </div>
      );
   } else {
      return (
         <div className="outerContainer">
            <div className={mainColor + " containerHeshteg "}>
               <div className="contentHeshteg">
                  <img src={icon} alt="icon" />
               </div>
               <div className="contentHeshteg">#МАЙБУТНЄ</div>
               <div className="contentHeshteg">#СВОБОДА</div>
               <div className="contentHeshteg">#ЗЕМЛЯ</div>
               <div className="contentHeshteg">#РОДИНА</div>
               <div className="contentHeshteg">#СИЛА</div>
               <div className="contentHeshteg">#ЗАХИСТ</div>
               <div className="contentHeshteg">#ВОЛЯ</div>
               <div className="contentHeshteg">#НАЦІЯ</div>
               <div className="contentHeshteg">
                  <img src={icon} alt="icon" />
               </div>
               <div className="contentHeshteg">#МАЙБУТНЄ</div>
               <div className="contentHeshteg">#СВОБОДА</div>
               <div className="contentHeshteg">#ЗЕМЛЯ</div>
               <div className="contentHeshteg">#РОДИНА</div>
               <div className="contentHeshteg">#СИЛА</div>
               <div className="contentHeshteg">#ЗАХИСТ</div>
               <div className="contentHeshteg">#ВОЛЯ</div>
               <div className="contentHeshteg">#НАЦІЯ</div>
               <div className="contentHeshteg">
                  <img src={icon} alt="icon" />
               </div>
               <div className="contentHeshteg">#МАЙБУТНЄ</div>
            </div>
         </div>
      );
   }
};

// для використання цього компоненту необхідно при його вставці додати props -
// mainColor, який відповідає кольору компонента. Існує 2 класи:
// для білого блоку - "whiteContainer",
// для зеленого блоку - "greenContainer".
