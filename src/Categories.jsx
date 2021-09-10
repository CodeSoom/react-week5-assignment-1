import React from 'react';

export default function Categories({ categories, handleInputText }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button key={category.id} type="button" onClick={handleInputText}>
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
