import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const testRestaurants = [
    {
      id: 1, categoryId: 1, name: '양천주가', address: '서울 강남구', information: '양천주가 in 서울 강남구',
    },
    {
      id: 6, categoryId: 1, name: '한국식 초밥', address: '서울 강남구', information: '한국식 초밥 in 서울 강남구',
    },
  ];

  context('with restaurants', () => {
    it('select restaurants', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: testRestaurants,
      }));

      const { getByText } = render((
        <RestaurantsContainer />
      ));

      expect(getByText(testRestaurants[0].name)).toBeInTheDocument();
    });
  });
});
