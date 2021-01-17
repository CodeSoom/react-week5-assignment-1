import React from 'react';

export default function Buttons({
  buttons,
  selectedButton,
  onClickSelect,
}) {
  return (
    <ul>
      {
        buttons.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={onClickSelect}
            >
              {name}
              {(name === selectedButton) && '(V)'}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
