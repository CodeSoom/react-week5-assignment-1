import React from 'react';

export default function Buttons({ buttons, onClick, selectId }) {
  return (
    <ul>
      {buttons.map((button) => (
        <li key={button.id}>
          <button type="button" onClick={() => onClick(button.id)}>
            {
              `${button.name}${
                selectId === button.id ? '(V)' : ''
              }`
            }
          </button>
        </li>
      ))}
    </ul>
  );
}
