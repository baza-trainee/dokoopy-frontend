export const DonateButton = ({ buttonClass }) => {
  return (
    <a className={buttonClass + ' donateButton'} href='#' target='_blank'>
      ЗРОБИТИ ДОНАТ
    </a>
  );
};

// для використання цього компоненту необхідно при його вставці додати props -
// buttonClass, який відповідає розмірам кнопки. Існує 3 класи, які
// мають медіаправила: для хедера "headerButton", для основного контенту
// "mainButton" і для бургерного меню "burger".
