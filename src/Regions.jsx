import React from 'react';

import Region from './Region';

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
