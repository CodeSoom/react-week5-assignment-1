import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import restaurant from '../../fixtures/restaurant';

import categories from '../../fixtures/categories';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const { getByText } = render(<CategoriesContainer restaurant={restaurant} />);

  expect(getByText(/한식/)).not.toBeNull();
});
