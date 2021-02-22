import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

import restaurants from '../fixtures/restaurants';

describe('App', () => {
  const renderApp = () => render(<App />);

  const restaurantData = restaurants.map((restaurant) => restaurant.name);

  it('renders restaurants', () => {
    const { queryByText } = renderApp();

    restaurantData.forEach(((name) => {
      expect(queryByText(name)).not.toBeNull();
    }));
  });
});
