import React from 'react';

export default function Categories({
  categories,
  clickedCategory,
  onClick,
}) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {name}
            {clickedCategory === id ? '(v)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
