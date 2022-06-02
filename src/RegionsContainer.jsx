import React from 'react';
import { useSelector } from 'react-redux';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <>
      {regions.map((region) => (
        <li key={region.id}>{region.name}</li>
      ))}
    </>
  );
}
