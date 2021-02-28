import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from './fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));
  });

  it('renders restaurant', () => {
    const { container } = render(<RestaurantsContainer />);

    expect(container).toHaveTextContent('양천주가');
  });
});
