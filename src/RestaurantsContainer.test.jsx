import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
import { restaurants } from './fixtures/mockData';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  const initialState = {
    restaurants,
    error: { restaurants: null },
    loading: { restaurants: false },
    selected: { regionName: null, categoryId: null },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('when region and category selected', () => {
    it('can get restaurants ', () => {
      useSelector.mockImplementationOnce((selector) => selector(
        { ...initialState, selected: { regionName: '서울', categoryId: 1 } },
      ));

      const { getByRole } = render(<RestaurantsContainer />);

      expect(dispatch).toHaveBeenCalledTimes(1);

      restaurants.forEach((restaurant) => {
        expect(getByRole('list')).toHaveTextContent(restaurant.name);
      });
    });
  });

  context('when region and category not selected', () => {
    it('can not get restaurants ', () => {
      useSelector.mockImplementationOnce((selector) => selector(initialState));

      render(<RestaurantsContainer />);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
