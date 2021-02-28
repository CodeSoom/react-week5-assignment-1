import React from 'react';

export default function Regions({ regions, onClickCheck , selectedRegionName }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button
            id={id}
            name={name}
            type="button"
            onClick={onClickCheck}
          > 
            {name}
            {name === selectedRegionName ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  )
}
