import React from 'react';

import CategoryContainer from './CategoryContainer';

export default function Categories({ categories }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <CategoryContainer category={category} />
        </li>
      ))}
    </ul>
  );
}
