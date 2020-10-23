import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import { categories } from '../../fixtures';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    category: {
      categories,
    },
  }));

  const { queryByText } = render(<CategoriesContainer />);

  expect(queryByText(/한식/)).not.toBeNull();
  expect(queryByText(/중식/)).not.toBeNull();
  expect(queryByText(/일식/)).not.toBeNull();
});
