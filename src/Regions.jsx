import React from 'react';

import { useSelector } from 'react-redux';

import Region from './Region';

export default function Regions({ regions, onClick }) {
  const regionName = useSelector((state) => state.regionName);

  return (
    <ul>
      {regions.map((region) => {
        if (regionName === region.name) {
          return (
            <Region
              key={region.id}
              region={{ id: region.id, name: `${region.name}(V)` }}
              onClick={onClick}
            />
          );
        }
        return (<Region key={region.id} region={region} onClick={onClick} />);
      })}
    </ul>
  );
}
