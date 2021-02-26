import React from 'react';

export default function Regions({ regions, onClickCheck }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={onClickCheck}
          >
            {region.name}
          </button>
        </li>
      ))}
    </ul>
  )
}
