import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../__fixtures__/categories';

test('Categories', () => {
  const { getByText } = render((
    <Categories categories={categories} />
  ));

  categories.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
