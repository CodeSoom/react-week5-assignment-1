import React from 'react';
import { render, screen } from '@testing-library/react';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  render(<Restaurants />);

  expect(screen.getByText(/양천주가/)).toBeInTheDocument();
});
