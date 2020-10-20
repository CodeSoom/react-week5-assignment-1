import React from 'react';

import { render } from '@testing-library/react';

import categories from '../__fixtures__/categories';

import Categories from './Categories';

test('Categories', () => {
  const { container } = render((
    <Categories categories={categories} />
  ));

  categories.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
