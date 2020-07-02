import React from 'react';

export default function Regions({
  regions, regionName, onClick,
}) {
  const isSelected = (name) => name === regionName;

  return (
    <ul>
      {
        regions.map((region) => (
          <li key={region.id}>
            <button
              type="button"
              onClick={() => onClick(region.name)}
            >
              { region.name }
              { isSelected(region.name) && '(V)' }
            </button>
          </li>
        ))
      }
    </ul>
  );
}
