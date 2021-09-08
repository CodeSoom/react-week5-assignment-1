import React from 'react';

import { render } from '@testing-library/react';

import categories from '../../fixtures/categories';

import Categories from './Categories';

test('Categories', () => {
  const { getByText } = render((
    <Categories categories={categories} />
  ));

  expect(getByText(/한식/)).not.toBeNull();
});
