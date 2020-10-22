import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      '새마을 식당',
    ],
  }));

  useDispatch.mockImplementation(() => dispatch);

  context('when load complete', () => {
    it('calls set Categories dispatch', () => {
      const { getByText } = render(<RestaurantsContainer />);

      expect(getByText('새마을 식당')).not.toBeNull();

      expect(dispatch).toBeCalled();
    });
  });
});
