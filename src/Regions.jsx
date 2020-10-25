import React from 'react';

export default function Resgions({ regions, selected, onClick }) {
  return (
    <>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={() => onClick(name)}>
              {selected === name ? `${name}(V)` : name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
