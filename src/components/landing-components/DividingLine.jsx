import { useState, useMemo } from "react";
import { useAppContext } from "../provider-components/app-provider";

import localization from "../../assets/language-switcher/localization";

import icon from "../../assets/icon/Logo_Ukraine_Defense.svg";

export const DividingLine = ({ mainColor }) => {
   const AppContext = useAppContext();
   const [greenContainerLanguage, setGreenContainerLanguage] = useState("greenContainerUkr");
   const [whiteContainerLanguage, setwhiteContainerLanguage] = useState("whiteContainerUkr");

   if (mainColor === "whiteContainer") {
      useMemo(() => {
         if (localization.dividingLine.ice === "#COLDNESS IN VEINS") {
            setwhiteContainerLanguage("whiteContainerEng");
         } else {
            setwhiteContainerLanguage("whiteContainerUkr");
         }
      }, [localization.dividingLine.future]);
      return (
         <div className="outerContainer">
            <div className={whiteContainerLanguage + " containerHeshteg "}>
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
      useMemo(() => {
         if (localization.dividingLine.future === "#FUTURE") {
            setGreenContainerLanguage("greenContainerEng");
         } else {
            setGreenContainerLanguage("greenContainerUkr");
         }
      }, [localization.dividingLine.future]);
      return (
         <div className="outerContainer">
            <div className={greenContainerLanguage + " containerHeshteg "}>
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
