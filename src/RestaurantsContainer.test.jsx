import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantsContainer() {
    const { container } = render(<RestaurantsContainer />);

    return { container };
  }

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) => selector({
      filter: {
        regionName: '서울',
        categoryId: 1,
      },
      restaurants,
    }));
  });

  it('renders', () => {
    const { container } = renderRestaurantsContainer();

    expect(container).not.toBeNull();
  });
});
