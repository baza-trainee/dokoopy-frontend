import { useAppContext } from "../provider-components/app-provider";

import localization from "../../assets/language-switcher/localization";

import icon from "../../assets/icon/Logo_Ukraine_Defense.svg";

export const DividingLine = ({ mainColor }) => {
   const AppContext = useAppContext();

   if (mainColor === "whiteContainer") {
      return (
         <div className="outerContainer">
            <div className={mainColor + " containerHeshteg "}>
               <div className="contentHeshteg">{localization.dividingLine.ice}</div>
               <div className="contentHeshteg">{localization.dividingLine.fire}</div>
               <div className="contentHeshteg">{localization.dividingLine.ice}</div>
               <div className="contentHeshteg">{localization.dividingLine.fire}</div>
               <div className="contentHeshteg">{localization.dividingLine.ice}</div>
               <div className="contentHeshteg">{localization.dividingLine.fire}</div>
               <div className="contentHeshteg">{localization.dividingLine.ice}</div>
               <div className="contentHeshteg">{localization.dividingLine.fire}</div>
               <div className="contentHeshteg">{localization.dividingLine.ice}</div>
               <div className="contentHeshteg">{localization.dividingLine.fire}</div>
               <div className="contentHeshteg">{localization.dividingLine.ice}</div>
               <div className="contentHeshteg">{localization.dividingLine.fire}</div>
               <div className="contentHeshteg">{localization.dividingLine.ice}</div>
               <div className="contentHeshteg">{localization.dividingLine.fire}</div>
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
               <div className="contentHeshteg">{localization.dividingLine.future}</div>
               <div className="contentHeshteg">{localization.dividingLine.liberty}</div>
               <div className="contentHeshteg">{localization.dividingLine.land}</div>
               <div className="contentHeshteg">{localization.dividingLine.family}</div>
               <div className="contentHeshteg">{localization.dividingLine.force}</div>
               <div className="contentHeshteg">{localization.dividingLine.defend}</div>
               <div className="contentHeshteg">{localization.dividingLine.liberty}</div>
               <div className="contentHeshteg">{localization.dividingLine.nation}</div>
               <div className="contentHeshteg">
                  <img src={icon} alt="icon" />
               </div>
               <div className="contentHeshteg">{localization.dividingLine.future}</div>
               <div className="contentHeshteg">{localization.dividingLine.liberty}</div>
               <div className="contentHeshteg">{localization.dividingLine.land}</div>
               <div className="contentHeshteg">{localization.dividingLine.family}</div>
               <div className="contentHeshteg">{localization.dividingLine.force}</div>
               <div className="contentHeshteg">{localization.dividingLine.defend}</div>
               <div className="contentHeshteg">{localization.dividingLine.liberty}</div>
               <div className="contentHeshteg">{localization.dividingLine.nation}</div>
               <div className="contentHeshteg">
                  <img src={icon} alt="icon" />
               </div>
               <div className="contentHeshteg">{localization.dividingLine.future}</div>
               <div className="contentHeshteg">{localization.dividingLine.liberty}</div>
               <div className="contentHeshteg">{localization.dividingLine.land}</div>
               <div className="contentHeshteg">{localization.dividingLine.family}</div>
               <div className="contentHeshteg">{localization.dividingLine.force}</div>
               <div className="contentHeshteg">{localization.dividingLine.defend}</div>
               <div className="contentHeshteg">{localization.dividingLine.liberty}</div>
               <div className="contentHeshteg">{localization.dividingLine.nation}</div>
            </div>
         </div>
      );
   }
};

// для використання цього компоненту необхідно при його вставці додати props -
// mainColor, який відповідає кольору компонента. Існує 2 класи:
// для білого блоку - "whiteContainer",
// для зеленого блоку - "greenContainer".
