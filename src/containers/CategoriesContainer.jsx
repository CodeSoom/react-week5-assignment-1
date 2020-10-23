import React from 'react';

import { useSelector } from 'react-redux';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.category.categories,
  }));

  function handleClick() {
    // TODO
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button">{category.name}</button>
        </li>
      ))}
    </ul>
  );
}
