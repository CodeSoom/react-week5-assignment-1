import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';
import { restaurants } from './fixtures/mockData';

describe('Restaurants', () => {
  context('if there are restaurants', () => {
    it('should be there restaurants with received prop', () => {
      const { getByRole } = render(<Restaurants restaurants={restaurants} />);

      restaurants.forEach((reataurant) => {
        expect(getByRole('list')).toHaveTextContent(reataurant.name);
      });
    });
  });

  context('If there is no restaurant list', () => {
    it('should be nothing', () => {
      const { queryByRole } = render(<Restaurants restaurants={null} />);

      expect(queryByRole('list')).toBe(null);
    });
  });
});
