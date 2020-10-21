import React from 'react';

import { useSelector } from 'react-redux';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories, selectedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryId: state.query.categoryId,
  }));

  return (
    <Categories categories={categories} selectedCategoryId={selectedCategoryId} />
  );
}
