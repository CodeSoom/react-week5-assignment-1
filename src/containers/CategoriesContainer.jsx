import React from 'react';

import { useSelector } from 'react-redux';

import Category from '../components/Category';

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
        <Category
          key={category.id}
          name={category.name}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
}
