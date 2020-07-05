import React from 'react';

export default function Regions({ selected, regions, onClick }) {
  return (
    <div>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <button type="button" onClick={() => onClick('region', region.name)}>
              {region.name}
              {selected === region.name && '(V)'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
