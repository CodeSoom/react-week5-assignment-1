import React from 'react';

export default function Categories({ categories }) {
  return (
    <ul>
      {categories.map((category) => (
        <li
          key={category.id}
        >
          <button type="button" value={category.name}>
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
