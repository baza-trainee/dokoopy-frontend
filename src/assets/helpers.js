export const formatData = dataUtf => {
   const date = new Date(dataUtf);

   const day = date.getDate();
   const monthNames = [
      "січня",
      "лютого",
      "березня",
      "квітня",
      "травня",
      "червня",
      "липня",
      "серпня",
      "вересня",
      "жовтня",
      "листопада",
      "грудня",
   ];
   const monthIndex = date.getMonth();
   const monthName = monthNames[monthIndex];
   const year = date.getFullYear();

   const formattedDate = `${day} ${monthName} ${year}`;

   return formattedDate;
};
export const formatDataEN = dataUtf => {
   const date = new Date(dataUtf);

   const day = date.getDate();
   const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];
   const monthIndex = date.getMonth();
   const monthName = monthNames[monthIndex];
   const year = date.getFullYear();

   const formattedDate = `${day} ${monthName} ${year}`;

   return formattedDate;
};
