import React from 'react';

const Item = ({ name, onClick }) => (
  <li>
    <button type="button" onClick={onClick}>
      {name}
    </button>
  </li>
);

export default Item;
