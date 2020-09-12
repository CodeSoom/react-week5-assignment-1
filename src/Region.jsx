import React from 'react';

export default function Region({ region, onClick, selectedRegion }) {
  const { id, name } = region;
  return (
    <li>
      <button type="button" onClick={() => onClick(id)}>
        {name}
        {selectedRegion ? (
          <>
            {
              id === selectedRegion.id ? '(V)' : null
            }
          </>
        ) : null}
      </button>
    </li>
  );
}
