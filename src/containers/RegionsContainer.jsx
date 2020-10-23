import React from 'react';

import { useSelector } from 'react-redux';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.region.regions,
  }));

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type="button">{region.name}</button>
        </li>
      ))}
    </ul>
  );
}
