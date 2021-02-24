import React from 'react';

export default function Buttons({ buttons, handleClick }) {
  return (
    <div>
      {buttons.map(({ id, name }) => (
        <button
          key={id}
          type="button"
          onClick={handleClick}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
