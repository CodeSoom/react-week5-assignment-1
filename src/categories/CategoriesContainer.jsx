import React from 'react';
import { useSelector } from 'react-redux';
import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <div>
      <h1>카테고리</h1>
      <Categories categories={categories} />
    </div>
  );
}
