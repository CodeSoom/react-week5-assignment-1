import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurants from '../fixtures/restaurants';

import App from './App';

describe('App', () => {
  const renderApp = () => render(<App />);

  useSelector.mockImplementation((selector) => selector({ restaurants }));

  it('renders restaurants', () => {
    const { queryByText } = renderApp();

    const restaurantData = restaurants.map((restaurant) => restaurant.name);

    restaurantData.forEach(((name) => {
      expect(queryByText(name)).not.toBeNull();
    }));
  });
});
