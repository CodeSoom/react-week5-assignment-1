import React from 'react';

export default function Regions({ regions, onClick }) {
  return (
    <div>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => onClick(name)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
