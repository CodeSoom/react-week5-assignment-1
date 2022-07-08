import React from 'react';

export default function Categories({ categories }) {
  return (
    <ul>
      {categories.map((category) => (
        <li>
          <button type="button" key={category.id}>
            {category.name}
          </button>

        </li>
      ))}
    </ul>
  );
}
