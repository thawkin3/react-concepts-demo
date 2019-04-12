import React, { Component, Fragment } from 'react';
import ModalTriggerButton from './ModalTriggerButton';
import ModalContent from './ModalContent';

class SelfContainedModal extends Component {
  state = { isOpen: false };

  onOpen = () => {
    this.setState({ isOpen: true }, () => {
      this.closeButtonNode.focus();
    });
    this.addScrollLock();
  };

  onClose = () => {
    this.setState({ isOpen: false });
    this.openButtonNode.focus();
    this.removeScrollLock();
  };

  onClickAway = (e) => {
    if (this.modalNode && this.modalNode.contains(e.target)) return;
    this.onClose();
  };

  onKeyDown = (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.onClose();
    }
  }

  addScrollLock = () => document.querySelector('html').classList.add('lock-scroll');

  removeScrollLock = () => document.querySelector('html').classList.remove('lock-scroll');

  render() {
    const { isOpen } = this.state;
    const { ariaLabel, children, triggerText, role } = this.props;
    return (
      <Fragment>
        <ModalTriggerButton
          onOpen={this.onOpen}
          buttonRef={n => this.openButtonNode = n}
          text={triggerText}
        />
        {isOpen && (
          <ModalContent
            ariaLabel={ariaLabel}
            buttonRef={n => this.closeButtonNode = n}
            modalRef={n => this.modalNode = n}
            content={children}
            onClickAway={this.onClickAway}
            onClose={this.onClose}
            onOverlayKeydown={this.onKeyDown}
            role={role}
          />
        )}
      </Fragment>
    );
  }
}

export default SelfContainedModal;