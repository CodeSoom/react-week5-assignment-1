import React from 'react';

import categories from '../fixtures/categories';

export default function Categories() {
  return (
    <ul>
      {
        categories.map(({ id, name }) => (
          <li key={id}>
            <button type="button">
              {name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
