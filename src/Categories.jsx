import React from 'react';

export default function Categories({ categories, onClick, selectedcategoryname }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={onClick}
            selectedcategoryname={selectedcategoryname}
          >
            {category.name === selectedcategoryname ? `${selectedcategoryname}(V)` : category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
