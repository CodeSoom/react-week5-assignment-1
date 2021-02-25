import React from 'react';

import uuid from 'react-uuid';

export default function Buttons({ buttons, handleClick }) {
  return (
    <ul>
      {buttons.map(({ id, name }) => (
        <li key={uuid()}>
          <button
            key={uuid()}
            id={id}
            name={name}
            type="button"
            onClick={handleClick}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>

  );
}
