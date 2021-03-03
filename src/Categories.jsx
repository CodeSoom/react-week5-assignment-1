import React from 'react';

import { useSelector } from 'react-redux';

import Category from './Category';

export default function Categories({ categories, onClick }) {
  const categoryId = useSelector((state) => state.categoryId);

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <Category
          key={id}
          category={{
            id,
            name: (categoryId === id) ? `${name}(V)` : name,
          }}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
