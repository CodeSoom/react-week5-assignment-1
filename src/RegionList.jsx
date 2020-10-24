import React from 'react';

import Item from './Item';

const RegionList = ({ regions, onSelectRegionClick, regionName }) => {
  if (regions.length === 0) {
    return null;
  }

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <Item
          key={id}
          name={name}
          check={name === regionName}
          onClick={() => onSelectRegionClick({ type: 'region', id: name })}
        />
      ))}
    </ul>
  );
};

export default RegionList;
