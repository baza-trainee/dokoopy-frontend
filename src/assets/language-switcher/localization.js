import LocalizedStrings from "react-localization";

const localization = new LocalizedStrings({
   ua: {
      currentLanguage: "UA",
      header: { mission: "Мета", about: "Бригада", projects: "Проєкти" },
      mission: { title: "Наша мета" },
      about: { title: "Про бригаду" },
      projects: { title: "Наші проєкти" },
      partners: { title: "Наші партнери" },
      contacts: { title: "Звернутись до організаторів" },
      donate: "Зробити донат",
   },
   en: {
      currentLanguage: "EN",
      header: { mission: "Mission", about: "Brigade", projects: "Projects" },
      mission: { title: "Our purpose" },
      about: { title: "About the brigade" },
      projects: { title: "Our projects" },
      partners: { title: "Our partners" },
      contacts: { title: "contacts info" },
      donate: "Make a donation",
   },
});

export default localization;
