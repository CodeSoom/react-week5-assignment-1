import React from 'react';

export default function Categories({ categories, onClick }) {
  return (
    <ul>
      {categories.map(({ id, category, isChecked }) => (
        <li key={id}>
          <button type="button" onClick={() => onClick(id, isChecked)}>
            {category && isChecked ? `${category}(V)` : category}
          </button>
        </li>
      ))}
    </ul>
  );
}
