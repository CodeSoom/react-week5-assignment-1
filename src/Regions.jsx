import React from 'react';

export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          {region.name}
        </li>
      ))}
    </ul>
  );
}
