import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import FoodLocationListContainer from './FoodLocationListContainer';
import locales from '../../fixtures/locales';
import foodCategories from '../../fixtures/foodCategories';

jest.mock('react-redux');

test('LocaleListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    locales,
    foodCategories,
  }));

  render(<FoodLocationListContainer />);

  expect(screen.getByText('서울')).toBeInTheDocument();
  expect(screen.getByText('한식')).toBeInTheDocument();
});
