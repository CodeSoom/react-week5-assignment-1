import React from 'react';

export default function Regions({ regions, selected, onClick }) {
  return (
    <ul>
      {
        regions.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => onClick({ name })}
            >
              {name === selected ? `${name}(V)` : name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
