import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

test('Categories', () => {
  const { getByText } = render((
    <Categories categories={categories} />
  ));

  expect(getByText('한식')).not.toBeNull();
});
