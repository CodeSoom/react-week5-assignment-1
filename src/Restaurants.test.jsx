import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';
import { restaurants } from './fixtures/mockData';

describe('Restaurants', () => {
  context('with restaurants', () => {
    it('render restaurants', () => {
      const { getByRole } = render(<Restaurants restaurants={restaurants} />);

      restaurants.forEach((reataurant) => {
        expect(getByRole('list')).toHaveTextContent(reataurant.name);
      });
    });
  });

  context('without restaurants', () => {
    it('render nothing', () => {
      const { queryByRole } = render(<Restaurants restaurants={null} />);

      expect(queryByRole('list')).toBe(null);
    });
  });
});
