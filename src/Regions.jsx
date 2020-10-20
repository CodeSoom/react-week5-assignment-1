import React from 'react';

export default function Regions({ regions, onClick }) {
  return (
    <ul>
      {regions.map(({ id, region }) => (
        <li key={id}><button onClick={onClick} type="button">{region}</button></li>
      ))}
    </ul>
  );
}
