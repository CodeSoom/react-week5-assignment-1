import React from 'react';

import { useSelector } from 'react-redux';

import Region from './Region';

export default function Regions({ regions, onClick }) {
  const regionName = useSelector((state) => state.regionName);

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <Region
          key={id}
          region={{
            id,
            name: (regionName === name) ? `${name}(V)` : name,
          }}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
