import React from 'react';

const ModalTriggerButton = ({ buttonRef, onOpen, text }) => (
  <button
    className="btn"
    onClick={onOpen}
    ref={buttonRef}
  >
    {text}
  </button>
);

export default ModalTriggerButton;
