import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';
import { restaurants } from './fixtures/mockData';

describe('Restaurants', () => {
  context('with restaurants', () => {
    it('renders restaurants', () => {
      const { getByRole } = render(<Restaurants restaurants={restaurants} />);

      restaurants.forEach((reataurant) => {
        expect(getByRole('list')).toHaveTextContent(reataurant.name);
      });
    });
  });

  context('without restaurants', () => {
    it('renders "텅~" ', () => {
      const { queryByRole, getByText } = render(<Restaurants restaurants={null} />);

      expect(queryByRole('list')).toBe(null);
      expect(getByText('텅~')).toBeInTheDocument();
    });
  });
});
