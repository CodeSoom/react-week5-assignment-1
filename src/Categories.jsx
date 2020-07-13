import React from 'react';

import Category from './item';

export default function Categories({ categories }) {
  return (
    <>
      <ul>
        {
          categories.map((category) => (
            <Category name={category.name} key={category.id} />
          ))
        }
      </ul>
    </>
  );
}
