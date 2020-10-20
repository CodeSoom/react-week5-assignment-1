import React from 'react';

import Region from './Region';

const RegionList = ({ regions, onSelectRegionClick }) => {
  if (regions.length === 0) {
    return null;
  }
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <Region
          key={id}
          region={name}
          onClick={() => onSelectRegionClick(id)}
        />
      ))}
    </ul>
  );
};

export default RegionList;
