import React from 'react';

export default function CategoryItem({ categoryName, isSelected }) {
  return (
    <li>
      <button type="button">
        {categoryName}
        {isSelected && '(V)'}
      </button>
    </li>
  );
}
