import React from 'react';

export default function Buttons({ buttonNameList, handleClickSelect }) {

  return (
    <ul>
      {
        buttonNameList.map((buttonName, index) => (
          <li key={index}>
            <button onClick={handleClickSelect}>
              {buttonName}
            </button>
          </li>
        ))
      }
    </ul>
  )
}
