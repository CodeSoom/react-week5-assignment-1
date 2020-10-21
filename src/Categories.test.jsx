import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

test('Categories', () => {
  const { queryByText } = render((
    <Categories categories={categories} />
  ));

  categories.forEach(({ name }) => {
    expect(queryByText(name)).not.toBeNull();
  });
});
