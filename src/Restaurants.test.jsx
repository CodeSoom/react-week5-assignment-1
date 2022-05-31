import { render, screen } from '@testing-library/react';

import state from '../fixtures/state';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  context('with currentRegionId and currentCategoryId', () => {
    it('renders restaurants', () => {
      const currentRegionId = 1;
      const currentCategoryId = 1;
      const { restaurants } = state;

      render(<Restaurants
        currentCategoryId={currentCategoryId}
        currentRegionId={currentRegionId}
        restaurants={restaurants}
      />);

      expect(screen.getByText('양천주가')).toBeInTheDocument();
    });
  });
});
