import React from 'react';

export default function Region({ regions }) {
  return (
    <>
      <div>
        {regions.map((region) => (
          <button type="button" key={region.id}>
            {region.text}
          </button>
        ))}
      </div>
    </>
  );
}
