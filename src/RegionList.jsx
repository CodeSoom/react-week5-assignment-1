import React from 'react';

import Item from './Item';

const RegionList = ({ regions, onSelectRegionClick, regionId }) => {
  if (regions.length === 0) {
    return null;
  }

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <Item
          key={id}
          name={id === regionId ? `${name}(V)` : name}
          onClick={() => onSelectRegionClick({ type: 'region', id })}
        />
      ))}
    </ul>
  );
};

export default RegionList;
