import React from 'react';

export default function Regions({ clickedRegionName, regions, onClick }) {
  function getClickedMarkIfClicked(name) {
    if (name === clickedRegionName) {
      return '(V)';
    }

    return '';
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type="button" onClick={() => onClick(region)}>
            {region.name}
            {getClickedMarkIfClicked(region.name)}
          </button>
        </li>
      ))}
    </ul>
  );
}
