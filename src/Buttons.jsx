import React from 'react';

export default function Buttons({ buttons }) {
  return (
    <ul>
      {buttons.map(({
        id, name,
      }) => (
        <li key={id}>
          <button type="button">
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
