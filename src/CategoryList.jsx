import React from 'react';

export default function CategoryList({ categories }) {
  return (
    <li>
      {categories.map(({ id, name }) => (
        <button
          type="button"
          key={id}
        >
          {name}
        </button>
      ))}
    </li>
  );
}
