import React from 'react';

export default function Buttons({ buttons = [], handleClick, selected }) {
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
            {id === selected && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
