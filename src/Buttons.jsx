import React from 'react';

export default function Buttons({ buttonNameList, selectButton, onClickSelect }) {

  return (
    <ul>
      {
        buttonNameList.map((buttonName, index) => (
          <li key={index}>
            <button onClick={onClickSelect}>
              {buttonName === selectButton ? buttonName + '(V)' : buttonName}
            </button>
          </li>
        ))
      }
    </ul>
  )
}
