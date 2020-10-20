import React from 'react';

const Category = ({ category, onClick }) => (
  <li>
    <button type="button" onClick={onClick}>
      {category}
    </button>
  </li>
);

export default Category;
