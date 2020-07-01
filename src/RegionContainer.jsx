import React from 'react';

import Region from './Region';

export default function RegionContainer({ region }) {
  return (
    <Region name={region.name} />
  );
}
