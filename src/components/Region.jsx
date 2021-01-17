import React from 'react';

const Region = ({ isSelected, name, onClick }) => (
  <li>
    <button
      type="button"
      onClick={onClick}
    >
      {isSelected() ? `${name}(v)` : name}
    </button>
  </li>
);

export default Region;
