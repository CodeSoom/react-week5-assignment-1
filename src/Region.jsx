import React from 'react';

export default function Region({ region: { id, name }, onClick }) {
  return (
    <li key={id}>
      <button
        type="button"
        name={name}
        onClick={onClick}
      >
        {name}
      </button>
    </li>
  );
}
