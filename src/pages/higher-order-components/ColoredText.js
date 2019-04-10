import React from 'react';

const ColoredText = ({ textColor }) => (
  <p>My text is <span style={{ color: textColor }}>{textColor}</span></p>
);

export default ColoredText;
