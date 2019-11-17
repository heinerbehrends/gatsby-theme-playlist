import React from 'react';

export const nextOrFirst = (array, index) => (
  index + 1 === array.length ? 0 : index + 1
);
export const nextOrLast = (array, index) => (
  index - 1 < 0 ? array.length - 1 : index - 1
);


const PlayerButton = ({ callback, children }) => (
  <button onClick={callback}>
    {children}
  </button>
);

export default PlayerButton;