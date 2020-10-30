import React from 'react';

export default function CategoryContainer() {
  const categories = [];

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
