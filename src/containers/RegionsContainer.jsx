import React from 'react';

import { useSelector } from 'react-redux';

import Region from '../components/Region';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.region.regions,
  }));

  function handleClick() {
    // TODO
  }

  return (
    <ul>
      {regions.map((region) => (
        <Region
          key={region.id}
          name={region.name}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
}
