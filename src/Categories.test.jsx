import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../fixture/test-data';

test('Categories', () => {
  const { getByText } = render((
    <Categories
      categories={categories}
    />
  ));

  categories.forEach((cateogory) => {
    expect(getByText(cateogory.name)).not.toBeNull();
  });
});