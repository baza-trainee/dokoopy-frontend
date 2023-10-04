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

export const sortData = data => {
   if (!data) {
      return null;
   }
   const compareDates = (a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
   };
   return data.toSorted(compareDates);
};
