import React from 'react';
import SelfContainedModal from './self-contained-modal/SelfContainedModal';

const Demo2 = () => {
  const modalContent1 = (
    <div>
      <p>Hello world Lorem ipsum dolor sit amet, <a href="#1">first link</a> consectetur adipiscing elit. Phasellus sagittis erat ut ex bibendum consequat. Morbi luctus ex ex, at varius purus <a href="#2">second link</a> vehicula consectetur. Curabitur a sapien a augue consequat rhoncus. Suspendisse commodo ullamcorper nibh quis blandit. Etiam viverra neque quis mauris efficitur, lobortis aliquam ex pharetra. Nam et ante ex. Sed gravida gravida ligula, non blandit nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer consectetur efficitur tempor. Nunc sollicitudin felis congue facilisis faucibus. Mauris faucibus sit amet ante eleifend dapibus.</p>
      <p>Nunc semper eu lectus ac blandit. Fusce iaculis dolor sit amet felis placerat, non auctor nibh pellentesque. Nunc dignissim, tortor eget sollicitudin pulvinar, sem est sagittis nisi, non condimentum orci felis vel libero. Aenean <a href="#3">third link</a> a tempus lorem. Proin a enim id magna malesuada consectetur mattis eget massa. Sed volutpat neque vitae tortor dignissim dapibus. Ut a ante maximus, sollicitudin nisi ut, varius magna. Vestibulum maximus urna eget commodo egestas. Donec sollicitudin tortor ac mauris pulvinar, ac maximus urna tempus. Mauris non libero posuere, ullamcorper neque vel, tempor sem. Suspendisse potenti. In tristique et metus id laoreet.</p>
    </div>
  );
  const modalProps1 = {
    ariaLabel: 'A label describing the Modal\'s current content',
    triggerText: 'Open Modal 1'
  };

  const modalContent2 = (
    <div>
      <p>This is a second modal! You can have multiple buttons on the page that trigger different modals, but naturally only one modal will be open at a time.</p>
    </div>
  );
  const modalProps2 = {
    ariaLabel: 'A label describing the Modal\'s current content',
    triggerText: 'Open Modal 2'
  };

  return (
    <div className="demo-section portals-demo-2">
      <h3>Demo 2 - Modal in a Portal (Self-Contained Code)</h3>
      <p>This is another example of a modal rendered inside a portal, but the code this time is structured a little
        differently. Instead of having the modal state and Open Button managed by the container component, everything is
        managed by the Modal component itself. This makes it much easier for developers consuming your component to
        simply render the single Modal component and not worry about any of the implementation details.</p>
      <p>Much of this demo has been borrowed from the <a href="https://github.com/Assortment/react-modal-component">React Modal Component</a> repo on GitHub, with a few modifications. Many thanks for the incredible example and demo!</p>
      <div>
        <p>
          <span>This is some text. </span>
          <SelfContainedModal {...modalProps1}>{modalContent1}</SelfContainedModal>
        </p>
        <p>
          <span>This button is for a different modal. </span>
          <SelfContainedModal {...modalProps2}>{modalContent2}</SelfContainedModal>
        </p>
      </div>
    </div>
  );
}

export default Demo2;
