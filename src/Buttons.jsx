import React from 'react';

export default function Buttons({ buttons, onClick, selectedButton }) {
  return (
    <ul>
      {buttons.map((button) => (
        <li key={button.id}>
          <button type="button" onClick={() => onClick(button)}>
            {button.name}
            {selectedButton && selectedButton.id === button.id ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
