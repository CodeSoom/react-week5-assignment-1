import React from 'react';

import Categories from './Categories';

import categories from '../__fixtures__/categories';

export default function CategoriesContainer() {
  return (
    <Categories categories={categories} />
  );
}
