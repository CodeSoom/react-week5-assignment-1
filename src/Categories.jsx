import React from 'react';

export default function Categories({ categories = [], onClick }) {
  return (
    <ul>
      {categories.map(({ id, category, isChecked }) => (
        <li key={id}>
          <button onClick={() => onClick(id, isChecked)} type="button">
            {category && isChecked ? `${category}(V)` : category}
          </button>
        </li>
      ))}
    </ul>
  );
}
