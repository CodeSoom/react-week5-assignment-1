import React from 'react';

import Categories from './Categories';

import categories from '../fixtures/categories';

export default function CategoriesContainer() {
  return (
    <div>
      <Categories categories={categories} />
    </div>
  );
}
