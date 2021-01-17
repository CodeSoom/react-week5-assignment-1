import React from 'react';
import { render, screen } from '@testing-library/react';

import Restaurants from './Restaurants';
import restaurants from '../../fixtures/restaurants';

test('Restaurants', () => {
  render(<Restaurants
    restaurants={restaurants}
  />);

  expect(screen.getByText(/양천주가/)).toBeInTheDocument();
});
