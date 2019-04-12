import React from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';

const ModalContent = ({
  ariaLabel,
  buttonRef,
  content,
  modalRef,
  onClickAway,
  onOverlayKeydown,
  onClose,
  role = 'dialog'
}) => {
  return createPortal(
    <FocusTrap>
      <div
        className="modal-overlay"
        role={role}
        aria-label={ariaLabel}
        aria-modal="true"
        onClick={onClickAway}
        onKeyDown={onOverlayKeydown}
      >
        <div className="modal" ref={modalRef}>
          <button
            className="modal-x-button"
            aria-label="Close Modal"
            onClick={onClose}
            ref={buttonRef}
          >
            &times;
          </button>
          <div className="modal-main-content">{content}</div>
          <button
            className="modal-close-button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </FocusTrap>,
    document.body
  );
}

export default ModalContent;
