import React from 'react';

export default function Buttons({
  type,
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
              name={type}
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
