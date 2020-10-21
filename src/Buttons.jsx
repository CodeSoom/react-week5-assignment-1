import React from 'react';

export default function Buttons({ buttonNames, selectedButton, onClickSelect }) {

  return (
    <ul>
      {
        buttonNames.map((buttonName, index) => (
          <li key={index}>
            <button onClick={onClickSelect}>
              {buttonName === selectedButton ? buttonName + '(V)' : buttonName}
            </button>
          </li>
        ))
      }
    </ul>
  )
}
