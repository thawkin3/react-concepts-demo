import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import './Modal.css';

class Modal extends Component {
  modalRef = createRef();

  onKeyDown = (e) => {
    const { onClose } = this.props;
    if (e.key === 'Escape' || e.key === 'Esc') {
      onClose && onClose();
    }
  }

  onClickAway = (e) => {
    const { onClose } = this.props;
    if (this.modalRef && this.modalRef.current && this.modalRef.current.contains(e.target)) {
      return;
    }
    onClose && onClose();
  };

  render() {
    const { children, isOpen, onClose, role = 'dialog', ariaLabel, sendFocusTo } = this.props;

    return (
      isOpen ? (
        createPortal(
          <FocusTrap>
            <div
              className="modal-overlay"
              role={role}
              aria-modal="true"
              aria-label={ariaLabel}
              tabIndex="-1"
              onClick={this.onClickAway}
              onKeyDown={this.onKeyDown}
            >
              <div
                className="modal"
                ref={this.modalRef}
              >
                <button
                  className="modal-x-button"
                  aria-label="Close Modal"
                  onClick={onClose}
                  ref={sendFocusTo}
                >
                  &times;
                </button>
                <div className="modal-main-content">
                  {children}
                </div>
                <button
                  className="modal-close-button"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </FocusTrap>,
          document.getElementById('modal-root')
        )
      ) : null
    );
  }
}

export default Modal;
