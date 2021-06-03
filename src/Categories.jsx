import React from 'react';

import Button from './Button';

export default function Categories({ categories }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Button
            item={category}
          />
        </li>
      ))}
    </ul>
  );
}
