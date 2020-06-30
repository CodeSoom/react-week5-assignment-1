import React from 'react';

import regions from './__fixtures__/regions';
import categories from './__fixtures__/categories';

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
      <li>
        {categories.map(({ id, name }) => (
          <button key={id} type="button">
            {name}
          </button>
        ))}
      </li>
    </>
  );
}
