import React from 'react';

export default function Regions({ regions }) {
  return (
    <ul>
      {
        regions.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))
      }
    </ul>
  );
}
