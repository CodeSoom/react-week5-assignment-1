import React from 'react';

const Item = ({ name, onClick, check }) => (
  <li>
    <button type="button" onClick={onClick}>
      {name}
      {check && '(V)'}
    </button>
  </li>
);

export default Item;
