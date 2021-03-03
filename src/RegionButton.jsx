import React from 'react';

export default function RegionButton({ name, onClick, currentRegion }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick(name)}
      >
        { currentRegion === name ? `${name}(V)` : name }
      </button>
    </li>
  );
}
