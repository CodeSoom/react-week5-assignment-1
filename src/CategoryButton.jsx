import React from 'react';

export default function CategoryButton({ name, onClick, selected }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
      >
        { selected ? `${name}(V)` : name }
      </button>
    </li>
  );
}
