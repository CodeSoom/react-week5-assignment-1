import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';
import { restaurants } from './fixtures/mockData';

describe('Restaurants', () => {
  context('if there are restaurants', () => {
    it('should be there restaurants with received prop', () => {
      const { getByRole } = render(<Restaurants Restaurants={restaurants} />);

      restaurants.forEach((reataurant) => {
        expect(getByRole('list')).toHaveTextContent(reataurant.name);
      });
    });
  });
});
