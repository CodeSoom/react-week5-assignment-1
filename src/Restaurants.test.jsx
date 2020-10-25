import React from 'react';

import { render } from '@testing-library/react';

import { restaurants } from '../__fixtures__/fixtures';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const renderRestaurants = () => render(
    <Restaurants restaurants={restaurants} />,
  );

  it('renders Restaurants', () => {
    const { container } = renderRestaurants();

    restaurants.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
