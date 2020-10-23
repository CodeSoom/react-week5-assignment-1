import React from 'react';

import { render } from '@testing-library/react';

import categories from '../__fixtures__/categories';

import Categories from './Categories';

describe('Categories', () => {
  const renderCategories = () => render(
    <Categories categories={categories} />,
  );

  it('renders buttons', () => {
    const { container } = renderCategories();

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
