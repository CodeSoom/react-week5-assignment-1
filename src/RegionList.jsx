import React from 'react';

export default function RegionList({ regions }) {
  return (
    <ul>
      {regions.map(({ id, name }) => <li key={id}>{name}</li>)}
    </ul>
  );
}
