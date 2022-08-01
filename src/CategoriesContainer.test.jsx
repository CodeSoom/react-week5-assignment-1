import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) =>
    selector({
      categories: [{ id: 1, name: '한식' }],
    })
  );

  const { getByText } = render(<CategoriesContainer />);

  expect(getByText(/한식/)).not.toBeNull();
});
