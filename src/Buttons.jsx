import React from 'react';

export default function Buttons({
  name,
  buttonNames,
  selectedButton,
  onClickSelect,
}) {
  return (
    <ul>
      {
        buttonNames.map((buttonName, index) => (
          <li key={index}>
            <button
              type="button"
              name={name}
              onClick={onClickSelect}
            >
              {buttonName}
              {(buttonName === selectedButton) && '(V)'}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
