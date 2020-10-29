import React from 'react';
import { render } from '@testing-library/react';

import CategoryList from './CategoryList';

test('CategoryList', () => {
  const categories = [];
  const { getByText } = render(<CategoryList categories={categories} />);

  categories.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
