import React from 'react';

export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map((region) => (
        <li>
          {region}
        </li>
      ))}
    </ul>
  );
}
