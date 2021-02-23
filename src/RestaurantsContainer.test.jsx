import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import restaurants from '../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const renderRestaurantsContainer = () => render(<RestaurantsContainer />);

  const givenSelector = (data) => useSelector.mockImplementation((selector) => selector({
    restaurants: data,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders restaurants', () => {
    given('restaurants', givenSelector(restaurants));

    const { queryByText } = renderRestaurantsContainer();

    const restaurantData = restaurants.map((restaurant) => restaurant.name);

    restaurantData.forEach((name) => {
      expect(queryByText(name)).not.toBeNull();
    });
  });

  it('renders the message that user has to click region and category buttons.', () => {
    given('message', givenSelector([]));

    const { queryByText } = renderRestaurantsContainer();

    expect(queryByText('지역과 카테고리를 클릭해주세요.')).not.toBeNull();
  });
});
