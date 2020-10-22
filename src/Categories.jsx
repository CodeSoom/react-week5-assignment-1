import React from 'react';

export default function Categories({ categories, selectedCategoryId, onClick }) {
  return (
    <ul>
      {categories.map(({ id, name }) => {
        const value = (id === selectedCategoryId) ? `${name}(V)` : name;

        return (
          <li key={id}>
            <button type="button" id={id} onClick={onClick}>
              {value}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
