import React from 'react';

export default function Buttons({
  buttonNames,
  selectedButton,
  onClickSelect,
}) {
  return (
    <ul>
      {
        buttonNames.map(({ id, name }) => (
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
