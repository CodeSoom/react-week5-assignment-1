import React from 'react';
import { render } from '@testing-library/react';

import CategoryContainer from './CategoryContainer';

test('CategoryContainer', () => {
  const categories = [];
  const { getByText } = render(<CategoryContainer categories={categories} />);

  categories.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
