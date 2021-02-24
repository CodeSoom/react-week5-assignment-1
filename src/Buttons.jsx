import React from 'react';

export default function Buttons({ buttons, onClick, selectId }) {
  return (
    <ul>
      {buttons.map((button) => (
        <li key={button.id}>
          <button type="button" onClick={() => onClick(button.id)}>
            {selectId === button.id
              ? `${button.name}(V)`
              : button.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
