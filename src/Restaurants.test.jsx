import React from 'react';

import { render } from '@testing-library/react';

import { restaurants } from '../__fixture__/data';

import Restaurants from './Restaurants';

jest.mock('react-redux');

describe('<Restaurants />', () => {
  describe('with restaurants', () => {
    it('shows a restaurants', () => {
      const { queryByText } = render(<Restaurants restaurants={restaurants} />);

      restaurants.forEach((restaurant) => {
        expect(queryByText(restaurant.name)).not.toBeNull();
      });
    });
  });
});
