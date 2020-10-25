import React from 'react';

export default function Regions({ regions, onClick }) {
  return (
    <ul>
      {
        regions.map(({ id, name }) => (
          <li key={`${id}:${name}`}>
            <button
              type="button"
              onClick={() => onClick(name)}
            >
              {name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
