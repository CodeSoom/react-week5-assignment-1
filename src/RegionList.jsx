import React from 'react';

import Region from './Region';

const RegionList = ({ regions }) => {
  if (regions.length === 0) {
    return null;
  }
  return (
    <ul>
      {regions.map((region) => (
        <Region
          key={region.id}
          region={region.name}
        />
      ))}
    </ul>
  );
};

export default RegionList;
