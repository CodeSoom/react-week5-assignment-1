import React from 'react';

export default function Categories({ categories, onClick }) {
  return (
    <ul>
      {categories.map(({ id, name, isChecked }) => (
        <li key={id}>
          <button type="button" onClick={() => onClick(id, isChecked)}>
            {name && isChecked ? `${name}(V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}
