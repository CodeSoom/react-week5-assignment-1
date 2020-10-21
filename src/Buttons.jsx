import React from 'react';

export default function Buttons({ buttonNameList, onClickSelect }) {

  return (
    <ul>
      {
        buttonNameList.map((buttonName, index) => (
          <li key={index}>
            <button onClick={onClickSelect}>
              {buttonName}
            </button>
          </li>
        ))
      }
    </ul>
  )
}
