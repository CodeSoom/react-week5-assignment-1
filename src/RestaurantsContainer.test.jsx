import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  context('when nothing selected', () => {
    it('should not display restaurants', () => {
      useSelector.mockImplementation((selector) => selector({
      }));

      const { getByText } = render((
        <RestaurantsContainer />
      ));

      expect(getByText('원초밥')).toBeNull();
    });
  });

  context('when category, region selected', () => {
    it('should display restaurants', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [
          { id: 101, name: '원초밥' },
        ],
      }));

      const { getByText } = render((
        <RestaurantsContainer />
      ));

      expect(getByText('원초밥')).not.toBeNull();
    });
  });
});
