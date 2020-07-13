import React from 'react';

import Region from './item';

export default function Regions({ regions }) {
  return (
    <>
      <ul>
        {
          regions.map((region) => (
            <Region name={region.name} key={region.id} />
          ))
        }
      </ul>
    </>
  );
}
