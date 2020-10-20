import React from 'react';

import Item from './Item';

const RegionList = ({ regions, onSelectRegionClick }) => {
  if (regions.length === 0) {
    return null;
  }
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <Item
          key={id}
          name={name}
          onClick={() => onSelectRegionClick(id)}
        />
      ))}
    </ul>
  );
};

export default RegionList;
