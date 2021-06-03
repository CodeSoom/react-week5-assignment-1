import React from 'react';

import Button from './Button';

export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <Button
            item={region}
          />
        </li>
      ))}
    </ul>
  );
}
