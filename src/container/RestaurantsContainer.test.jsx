import React from 'react';
import { render, screen } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  it('render', () => {
    render(<RestaurantsContainer />);

    expect(screen.getByText(/양천주가/)).toBeInTheDocument();
  });
});
