import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import { restaurants } from '../__fixture__/data';

jest.mock('react-redux');

describe('<RestaurantsContainer />', () => {
  describe('render RestaurantsContainer', () => {
    context('with selectedRegion and selectedCategory', () => {
      it('shows a restaurants', () => {
        useSelector.mockImplementation((selector) => selector({
          selectedRegion: '서울',
          selectedCategory: '한식',
        }));

        const { queryByText } = render(<RestaurantsContainer />);

        restaurants.forEach((restaurant) => {
          expect(queryByText(restaurant.name)).not.toBeNull();
        });
      });
    });
  });
});
