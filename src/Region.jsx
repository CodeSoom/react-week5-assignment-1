import React from 'react';

export default function Categories({ regions }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type="button" key={region.id}>
            {region.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
