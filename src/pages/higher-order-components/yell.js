import React from 'react';
import getDisplayName from '../../util/getDisplayName';

const yell = (WrappedComponent) => {
  const Yell = ({ children, ...props }) => (
    <WrappedComponent {...props}>
      {children.toUpperCase()}!
    </WrappedComponent>
  );

  Yell.displayName = `Yell(${getDisplayName(WrappedComponent)})`;

  return Yell;
}

export default yell;
