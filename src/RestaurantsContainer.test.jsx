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
    watching: { regionName: null, categoryId: null },
  };

  context('when region and category selected', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      useSelector.mockImplementationOnce((selector) => selector(
        { ...initialState, watching: { regionName: '서울', categoryId: 1 } },
      ));
      useDispatch.mockImplementationOnce(() => dispatch);
    });
    it('should get restaurants ', () => {
      render(<RestaurantsContainer />);
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
