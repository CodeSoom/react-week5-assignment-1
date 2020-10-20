import React from 'react';

const Region = ({ region, onClick }) => (
  <li>
    <button type="button" onClick={onClick}>
      {region}
    </button>
  </li>
);

export default Region;
