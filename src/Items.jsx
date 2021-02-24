import React from 'react';

export default function Items({ regions }) {
  return (
    <ul>
      {regions.map((region, index) => (
        <li key={index}>
          { region }
        </li>
      ))}
    </ul>
  );
}
