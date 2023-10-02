import localization from "../../assets/language-switcher/localization";

export const Mission = () => {
   return (
      <div id="mission" className="mission">
         <div className="container">
            <div className="mission-box">
               <h2 className="title-mission">{localization.mission.title}</h2>

               <div className="mission-block">
                  <div className="mission-block-box">
                     <div className="mission-block-box-img"></div>
                     <div className="mission-block-box-text">
                        <p className="mission-block-box-text-p">{localization.mission.purpose1}</p>
                     </div>
                  </div>
                  <div className="mission-block-box">
                     <div className="mission-block-box-img"></div>
                     <div className="mission-block-box-text">
                        <p className="mission-block-box-text-p">{localization.mission.purpose2}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

// Збір на 57 бригаду, котрі беруть участь в самих запеклих боях. Тому
//                            потреба в розхідних матеріалах просто вееелеетенська - це і рації, і
//                            ремонт машин, гума на колеса тощо. Саме тому у нас немає запиту на
//                            конкретну суму - на фронті щось потрібно постійно, фінансове питання
//                            відкрите завжди.

// Ми віримо: якщо спроможні бізнеси, люди та корпорації візьмуть на себе
//                            фінансову підтримку хоча б одного військового - потреби фронту будуть
//                            закриватися швидше. На цьому сайті ми – Don’t Panic Group та усі, кому
//                            відгукується ідея, збираємось до купи, щоб підтримати 57 бригаду.
