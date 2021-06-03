import React from 'react';

export default function Categories({ categories }) {
  function handleClick() {
    return {
    };
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={handleClick}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
