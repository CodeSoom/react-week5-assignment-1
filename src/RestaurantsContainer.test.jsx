import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ restaurants }));
  });

  it('식당 목록을 표시합니다.', () => {
    const { queryByText } = render((<Restaurants restaurants={restaurants} />));

    expect(queryByText(/호신각/)).not.toBeNull();
    expect(queryByText(/홍콩반점/)).not.toBeNull();
  });
});
