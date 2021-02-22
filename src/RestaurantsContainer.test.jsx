import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurants from '../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const renderRestaurantsContainer = () => render(<RestaurantsContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({ restaurants }));
  });

  it('renders restaurants', () => {
    const { queryByText } = renderRestaurantsContainer();

    const restaurantData = restaurants.map((restaurant) => restaurant.name);

    restaurantData.forEach((name) => {
      expect(queryByText(name)).not.toBeNull();
    });
  });

  it('renders the message that user has to click region and category buttons.', () => {
    useSelector.mockImplementation((selector) => selector({ restaurants: [] }));

    const { queryByText } = renderRestaurantsContainer();

    expect(queryByText('지역과 카테고리를 클릭해주세요.')).not.toBeNull();
  });
});
