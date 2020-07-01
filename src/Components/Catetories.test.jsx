import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

test('Categories', () => {
  const categories = [];
  const selectedCategoryId = 0;
  const handleClickCategory = jest.fn();

  const { getByText } = render((
    <Categories
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      handleClickCategory={handleClickCategory}
    />
  ));
});
