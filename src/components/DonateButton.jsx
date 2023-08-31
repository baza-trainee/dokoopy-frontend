import '../styles/components/_donate-button.scss';

export const DonateButton = ({ buttonClass }) => {
  return (
    <button className={buttonClass}>
      <a href='#' target='_blank'>
        ЗРОБИТИ ДОНАТ
      </a>
    </button>
  );
};

// для використання цього компоненту необхідно при його вставці додати props -
// buttonClass, який відповідає розмірам кнопки. Існує 3 класи, які
// мають медіаправила: для хедера "headerButton", для основного контенту
// "mainButton" і для бургерного меню "burger".
