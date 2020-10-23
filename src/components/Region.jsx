import React from 'react';

const Region = ({ name, onClick }) => (
  <li>
    <button
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  </li>
);

export default Region;
