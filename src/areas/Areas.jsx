import React from 'react';

export default function Areas({ areas, handleClick, areaName }) {
  const displayChecked = (name) => {
    if (name === areaName) {
      return '(V)';
    }
    return '';
  };

  return (
    <ul>
      {areas.map((area) => (
        <li key={area.id}>
          <button type="button" onClick={() => handleClick(area.name)}>
            {area.name}
            {displayChecked(area.name)}
          </button>
        </li>
      ))}
    </ul>
  );
}
