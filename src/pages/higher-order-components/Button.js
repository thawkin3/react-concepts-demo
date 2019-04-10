import React from 'react';

const Button = ({ buttonText, clickHandler, buttonType, additionalClasses }) => (
  <button
    type={buttonType || 'button'}
    onClick={clickHandler}
    className={`btn ${additionalClasses || ''}`}
  >
    {buttonText}
  </button>
);

export default Button;
