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
            <button type="submit" name={name} onClick={onClickSelect}>
              {buttonName === selectedButton ? `${buttonName}(V)` : buttonName}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
