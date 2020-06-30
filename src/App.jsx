import React from 'react';

import regions from './__fixtures__/regions';

export default function App() {
  return (
    <>
      <li>
        {regions.map(({ id, name }) => (
          <button key={id} type="button">
            {name}
          </button>
        ))}
      </li>
    </>
  );
}
