import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';
import restaurants from '../../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('render', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    render(<RestaurantsContainer />);

    expect(screen.getByText(/양천주가/)).toBeInTheDocument();
  });
});
