import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) => selector({
      filter: {
        regionName: null,
        categoryId: null,
      },
      restaurants,
    }));
  });

  it('renders', () => {
    const { container } = render(<RestaurantsContainer />);

    expect(container).not.toBeNull();
  });
});
