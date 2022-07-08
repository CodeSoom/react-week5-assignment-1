import React from 'react';

export default function Categories({ categories }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" key={category.id}>
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
