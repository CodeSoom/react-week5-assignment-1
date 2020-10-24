import React from 'react';
import { render } from '@testing-library/react';

import CategoryList from './CategoryList';
import categories from '../fixtures/categories';

test('CategoryList', () => {
  const { getByText } = render(<CategoryList categories={categories} />);

  expect(getByText('한식')).not.toBeNull();
  expect(getByText('중식')).not.toBeNull();
  expect(getByText('일식')).not.toBeNull();
  expect(getByText('양식')).not.toBeNull();
  expect(getByText('분식')).not.toBeNull();
});
