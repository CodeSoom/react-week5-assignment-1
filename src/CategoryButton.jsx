import React from 'react';

export default function CategoryButton({ name, onClick, currentCategory }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick(name)}
      >
        { currentCategory === name ? `${name}V` : name }
      </button>
    </li>
  );
}
