import React from 'react';

export default function Region({ region: { id, name }, selectedRegion, onClick }) {
  return (
    <>
      <li>
        <button type="button" onClick={() => onClick(id)}>{ `${name}${selectedRegion && selectedRegion.id === id ? '(V)' : ''}` }</button>
      </li>
    </>
  );
}
