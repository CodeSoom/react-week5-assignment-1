import React from 'react';

export default function ButtonList({ elements, onClick }) {
  return (
    <ul>
      {elements.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
