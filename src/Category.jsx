import React from 'react';

export default function Category({ category: { id, name }, onClick }) {
  return (
    <li key={id}>
      <button
        type="button"
        onClick={() => onClick(id)}
      >
        {name}
      </button>
    </li>
  );
}
