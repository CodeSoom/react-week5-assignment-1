import React from 'react';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

test('<CategoriesContainer', () => {
  const { getByText } = render(<CategoriesContainer />);

  expect(getByText('한식')).not.toBeNull();
});
