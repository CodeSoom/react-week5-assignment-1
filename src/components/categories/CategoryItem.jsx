import React from 'react';

export default function CategoryItem({ categoryName, isSelected, onClick }) {
  return (
    <li>
      <button type="button" onClick={onClick}>
        {categoryName}
        {isSelected && '(V)'}
      </button>
    </li>
  );
}
