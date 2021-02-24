import React from 'react';

export default function Buttons({ buttons }) {
  return (
    <div>
      {buttons.map(({ id, name }) => (
        <button key={id} type="button">{name}</button>
      ))}
    </div>
  );
}
