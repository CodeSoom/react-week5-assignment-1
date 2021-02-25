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

  it('식당 목록을 api로부터 불러옵니다.', () => {
    render((<Restaurants />));

    expect(dispatch).toBeCalled();
  });
});
