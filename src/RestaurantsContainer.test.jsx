import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from './__fixture__/restaurants';

describe('RestaurantsContainer', () => {
  jest.mock('react-redux');

  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
    }));
  });

  context('without restaurants', () => {
    it('renders restaurants', () => {
      const { queryByText } = render(<RestaurantsContainer />);

      expect(queryByText(/레스토랑 목록이 없습니다/)).not.toBeNull();
    });
  });

  context('with restaurants', () => {
    it('renders restaurants', () => {
      useSelector.mockImplementation((selector) => selector({
        currentRegion: '서울',
        currentCategory: '한식',
        restaurants,
      }));

      const { getByText } = render(<RestaurantsContainer />);

      expect(getByText('양천주가')).not.toBeNull();
      expect(getByText('한국식 초밥')).not.toBeNull();
    });
  });
});
