import React from 'react';
import { render } from '@testing-library/react';

import CategoryList from './CategoryList';
import categories from '../fixtures/categories';

test('CategoryList', () => {
  const { getByText } = render(<CategoryList categories={categories} />);

  categories.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
