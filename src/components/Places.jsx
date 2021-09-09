import React from 'react';

export default function Places({
  places,
  clickedPlace,
  onClick,
}) {
  return (
    <ul>
      { places.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(name)}
          >
            {name}
            {clickedPlace === name ? '(v)' : '' }
          </button>
        </li>
      ))}
    </ul>
  );
}
