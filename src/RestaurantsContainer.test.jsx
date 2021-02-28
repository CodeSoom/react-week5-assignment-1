import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixture/retaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  it('레스토랑을 화면에 보여준다.', () => {
    const { queryByText } = render(<RestaurantsContainer />);
    expect(queryByText('양천주가')).toBeInTheDocument();
    expect(queryByText('한국식 초밥')).toBeInTheDocument();
    expect(queryByText('김초밥')).toBeInTheDocument();
  });
});
