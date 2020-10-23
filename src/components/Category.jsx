import React from 'react';

const Category = ({ name, onClick }) => (
  <li>
    <button
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  </li>
);

export default Category;
