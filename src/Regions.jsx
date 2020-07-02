import React from 'react';

import Region from './Region';

export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map((region) => (
        <Region
          key={region.id}
          name={region.name}
        />
      ))}
    </ul>
  );
}
