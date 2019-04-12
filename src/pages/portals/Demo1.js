import React, { Component, createRef } from 'react';
import Modal from './Modal';

class Demo1 extends Component {
  state = { showModal: false }

  openButtonRef = createRef();
  closeButtonRef = createRef();

  openModal = () => {
    this.setState({ showModal: true }, () => {
      this.closeButtonRef && this.closeButtonRef.current && this.closeButtonRef.current.focus();
    });
    this.addScrollLock();
  }

  closeModal = () => {
    this.setState({ showModal: false });
    this.openButtonRef && this.openButtonRef.current && this.openButtonRef.current.focus();
    this.removeScrollLock();
  };

  addScrollLock = () => document.querySelector('html').classList.add('lock-scroll');

  removeScrollLock = () => document.querySelector('html').classList.remove('lock-scroll');

  render() {
    return (
      <div className="demo-section portals-demo-1">
        <h3>Demo 1 - Modal in a Portal</h3>
        <p>Commonly in an app, there will be buttons you can click which will open a modal that contains additional information. The button sits in the normal flow of the page, but the modal appears as a container that sits "on top" of the page at a higher z-index. The modal may take up the full width of the page, or, more likely, the modal may be centered on the page while there is a full screen overlay on top of the rest of the page.</p>
        <p>This demo shows a simple modal rendered into a portal.</p>
        <button
          type="button"
          onClick={this.openModal}
          ref={this.openButtonRef}
        >
          Toggle modal
        </button>
        <Modal
          onClose={this.closeModal}
          isOpen={this.state.showModal}
          sendFocusTo={this.closeButtonRef}
          ariaLabel="Modal Title Here"
          role="dialog"
        >
          <h2 className="modal-header">Modal Title Here</h2>
          <p>Thanks for opening this modal! Here is a bunch of extra information that you may want to know about! This content could be big or small, from a single sentence to many paragraphs.</p>
          <p>This modal can be closed by the X button, the Close button, or by clicking anywhere on the full-page overlay.</p>
        </Modal>
        <h4>Accessibility Tips for Modals</h4>
        <p>Accessibility is often overlooked when creating modals. Some key concepts and gotchas are:</p>
        <ul>
          <li>When the modal is open, the focus should be trapped inside the modal. In other words, when using the keyboard, you should not be able to tab to other elements in the UI that are not part of the modal.</li>
          <li>When the modal is open, the focus should go to an element in the modal. When the modal is closed, the focus should go back to the element that triggered the modal opening.</li>
          <li>When the modal is open, the rest of the page underneath the modal should no longer be scrollable.</li>
          <li>The modal should be closeable by clicking a Close button in the modal, by clicking anywhere on the screen outside of the modal, or by hitting the Escape key.</li>
        </ul>
      </div>
    );
  }
}

export default Demo1;
