import * as yup from "yup";
export const validSchema = {
   project: {
      title: yup.string().required("Поле обов'язкове для заповнення").trim(),
      titleEN: yup.string().required("Поле обов'язкове для заповнення").trim(),
      description: yup
         .string()
         .required("Поле обов'язкове для заповнення")
         .max(300, "Ви ввели забагато символів")
         .trim(),
      descriptionEN: yup
         .string()
         .required("Поле обов'язкове для заповнення")
         .max(300, "Ви ввели забагато символів")
         .trim(),
   },
   partner: {
      title: yup.string().required("Поле обов'язкове для заповнення").trim(),
      link: yup.string().required("Поле обов'язкове для заповнення").trim(),
   },
   heros: {
      title: yup.string().required("Поле обов'язкове для заповнення").trim(),
      description: yup
         .string()
         .trim()
         .required("Поле обов'язкове для заповнення")
         .max(110, "Ви ввели забагато символів"),
      descriptionEN: yup
         .string()
         .trim()
         .required("Поле обов'язкове для заповнення")
         .max(110, "Ви ввели забагато символів"),
   },
};
