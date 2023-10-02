import LocalizedStrings from "react-localization";

const localization = new LocalizedStrings({
   ua: {
      currentLanguage: "UA",
      header: { mission: "Мета", about: "Бригада", projects: "Проєкти" },
      mission: {
         title: "Наша мета",
         purpose1:
            "Збір на 57 бригаду, котрі беруть участь в самих запеклих боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо. Саме тому у нас немає запиту на конкретну суму - на фронті щось потрібно постійно, фінансове питання відкрите завжди.",
         purpose2:
            "Ми віримо: якщо спроможні бізнеси, люди та корпорації візьмуть на себе фінансову підтримку хоча б одного військового - потреби фронту будуть закриватися швидше. На цьому сайті ми – Don’t Panic Group та усі, кому відгукується ідея, збираємось до купи, щоб підтримати 57 бригаду.",
      },
      dividingLine: { fire: "#ЗАПАЛ У СЕРЦЯХ", ice: "#ХОЛОД У ЖИЛАХ" },
      about: { title: "Про бригаду" },
      projects: { title: "Наші проєкти" },
      partners: { title: "Наші партнери" },
      contacts: { title: "Звернутись до організаторів" },
      donate: "Зробити донат",
   },
   en: {
      currentLanguage: "EN",
      header: { mission: "Mission", about: "Brigade", projects: "Projects" },
      mission: {
         title: "Our purpose",
         purpose1:
            "Fundrising for the 57th brigade, which fights in the fiercest battles. This is why needs for consumables is enormous - these includes radio sets, car repairs, tires on wheels, etc. That is why we do not have a request for a specific amount of money - something is always needed at the military front, financial requests are always open.",
         purpose2:
            "We strongly believe: as soon as commercial businesses, people and corporations take on financial support for even one soldier, the needs of the front will be closed faster. On this web-site, we, the Don't Panic Group, and everyone who shares the idea, are getting together to support the 57th Brigade.",
      },
      dividingLine: { fire: "#FIRE IN HEARTS", ice: "#COLDNESS IN VEINS" },
      about: { title: "About the brigade" },
      projects: { title: "Our projects" },
      partners: { title: "Our partners" },
      contacts: { title: "contacts info" },
      donate: "Make a donation",
   },
});

export default localization;
