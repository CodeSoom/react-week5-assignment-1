import React from 'react';

import { useSelector } from 'react-redux';

import Region from './Region';

export default function Regions({ regions, onClick }) {
  const regionClicked = useSelector((state) => state.regionClicked);

  return (
    <ul>
      {regions.map((region) => {
        if (regionClicked === region.id) {
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
