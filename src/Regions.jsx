import React from 'react';

import Region from './item';

export default function Regions({ regions, regionName, onClick }) {
  return (
    <>
      <ul>
        {
          regions.map((region) => (
            <Region name={region.name} checkedName={regionName} onClick={onClick} key={region.id} />
          ))
        }
      </ul>
    </>
  );
}
