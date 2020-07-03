import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';

import { categories } from '../fixtures/restaurants';

describe('RestaurantCategoriesContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories,
    }));
  });

  it('show restaurant categories', () => {
    const { getByText } = render((
      <RestaurantCategoriesContainer />
    ));

    categories.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
