import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from '../../fixtures/categories';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
    query: {
      categoryId: 4,
    },
  }));

  const { queryByText } = render(<CategoriesContainer />);

  expect(queryByText(/한식/)).not.toBeNull();

  expect(queryByText(/일식\(V\)/)).not.toBeNull();
});
