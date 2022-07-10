import React from 'react';

export default function Region({ regions, region, onClickRegion }) {
  return (
    <ul>
      {regions?.map((regionItem) => (
        <li key={regionItem.id}>
          <button type="button" onClick={() => onClickRegion(regionItem)}>
            {regionItem.name}
            {region && regionItem.id === region.id && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
