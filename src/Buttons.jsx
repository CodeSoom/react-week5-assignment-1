import React from 'react';

export default function Buttons({ buttons = [], handleClick }) {
  return (
    <ul>
      {buttons.map(({
        id, name,
      }) => (
        <li key={id}>
          <button
            type="button"
            onClick={handleClick}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
