import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));
  });

  it('renders', () => {
    const { container, getByText } = render(<RestaurantsContainer />);

    expect(container).not.toBeNull();
    expect(getByText('양천주가')).not.toBeNull();
  });
});
