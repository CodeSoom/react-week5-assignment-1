import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  context('with restaurants', () => {
    it('레스토랑 목록이 보인다.', () => {
      const { getByText } = render(
        <RestaurantsContainer />,
      );

      restaurants.forEach(({ name }) => {
        expect(getByText(new RegExp(name))).not.toBeNull();
      });
    });
  });
});
