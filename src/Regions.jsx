import React from 'react';

import RegionContainer from './RegionContainer';

export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <RegionContainer region={region} />
        </li>
      ))}
    </ul>
  );
}
